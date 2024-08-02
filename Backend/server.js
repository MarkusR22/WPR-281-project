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
    const { username, password } = req.body;

    fs.readFile('users.txt', 'utf8', (err, data) => {
        if (err) {
            return res.json({ message: 'Error logging in' });
        }

        const users = data.split('\n').map(line => line.split(':'));
        const user = users.find(u => u[0] === username && u[1] === password);

        if (user) {
            res.json({ message: 'Login successful' });
        } else {
            res.json({ message: 'Invalid username or password' });
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
                jsonData = [formData];
            } else {
                return res.status(500).json({ message: 'Failed to read form data.' });
            }
        } else {
            // File exists, append data
            jsonData = JSON.parse(data);
            formData.studentId = generateStudentId(jsonData);
            jsonData.push(formData);
        }

        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Failed to save form data.' });
            }

            res.json({ message: 'Form data saved successfully!', studentId: formData.studentId });
        });
    });
});

const PORT = 3000; // Ensure this matches the port in the fetch requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
