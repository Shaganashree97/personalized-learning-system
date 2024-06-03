const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const usersFile = path.join(__dirname, '../db/users.json');

router.post('/', (req, res) => {
    const { name, username, email, password } = req.body;

    if (!name || !username || !email || !password) {
        return res.json({ success: false, message: 'All fields are required' });
    }

    fs.readFile(usersFile, (err, data) => {
        if (err) {
            return res.json({ success: false, message: 'Failed to read user data' });
        }

        let users = JSON.parse(data);

        if (users.find(user => user.username === username || user.email === email)) {
            return res.json({ success: false, message: 'User already exists' });
        }

        users.push({ name, username, email, password });
        
        fs.writeFile(usersFile, JSON.stringify(users), (err) => {
            if (err) {
                return res.json({ success: false, message: 'Failed to save user data' });
            }

            res.json({ success: true });
        });
    });
});

module.exports = router;
