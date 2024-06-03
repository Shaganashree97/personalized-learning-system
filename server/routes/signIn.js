const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const usersFile = path.join(__dirname, '../db/users.json');

router.post('/', (req, res) => {
    const { login, password } = req.body;

    if (!login || !password) {
        return res.json({ success: false, message: 'All fields are required' });
    }

    fs.readFile(usersFile, (err, data) => {
        if (err) {
            return res.json({ success: false, message: 'Failed to read user data' });
        }

        const users = JSON.parse(data);
        const user = users.find(user => (user.username === login || user.email === login) && user.password === password);

        if (!user) {
            return res.json({ success: false, message: 'Invalid credentials' });
        }

        res.json({ success: true });
    });
});

module.exports = router;
