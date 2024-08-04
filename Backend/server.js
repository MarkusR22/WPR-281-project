const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

const filePath = path.join(__dirname, 'enrollData.json');

// Function to generate a sequential Student ID starting from 700984
function generateStudentId(existingData) {
    const startId = 700984;
    let maxId = startId - 1;

    if (existingData.length > 0) {
        const ids = existingData.map(student => parseInt(student.studentId, 10));
        maxId = Math.max(...ids);
    }

    return (maxId + 1).toString();
}

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const userData = `${username}:${password}\n`;

    fs.appendFile('users.txt', userData, (err) => {
        if (err) {
            return res.json({ message: 'Error signing up' });
        }
        res.json({ message: 'Sign up successful' });
    });
});

app.post('/login', (req, res) => {
    const { studentId, password } = req.body;

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.json({ message: 'Error logging in' });
        }

        const students = JSON.parse(data);
        const student = students.find(s => s.studentId === studentId && s.password === password);

        if (student) {
            res.json({ message: 'Login successful' });
        } else {
            res.json({ message: 'Invalid Student ID or password' });
        }
    });
});

app.post('/changePassword', (req, res) => {
    const { studentId, newPassword } = req.body;

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to read form data.' });
        }

        const students = JSON.parse(data);
        const studentIndex = students.findIndex(student => student.studentId === studentId);

        if (studentIndex !== -1) {
            students[studentIndex].password = newPassword;
            fs.writeFile(filePath, JSON.stringify(students, null, 2), (err) => {
                if (err) {
                    return res.status(500).json({ message: 'Failed to save form data.' });
                }
                res.json({ message: 'Password changed successfully.' });
            });
        } else {
            res.status(404).json({ message: 'Student not found.' });
        }
    });
});

app.post('/saveForm', (req, res) => {
    const formData = req.body;

    fs.readFile(filePath, 'utf8', (err, data) => {
        let jsonData = [];
        if (err) {
            if (err.code === 'ENOENT') {
                // File does not exist, create it
                formData.studentId = '700984';
                formData.password = 'BelgiumCampus';
                jsonData = [formData];
            } else {
                return res.status(500).json({ message: 'Failed to read form data.' });
            }
        } else {
            // File exists, append data
            jsonData = JSON.parse(data);
            formData.studentId = generateStudentId(jsonData);
            formData.password = 'BelgiumCampus';
            jsonData.push(formData);
        }

        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Failed to save form data.' });
            }

            res.json({ message: `Enrolled successfully! \n\nAccess your Dashboard\nStudent number: ${formData.studentId} \nTemp password: "BelgiumCampus"`, studentId: formData.studentId });
        });
    });
});

const PORT = 3000; // Ensure this matches the port in the fetch requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
