const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors'); // Import cors
const app = express();

app.use(cors()); // Use cors
app.use(bodyParser.json());
app.use(express.static('public'));

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

const PORT = 3001; // Ensure this matches the port in the fetch requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
