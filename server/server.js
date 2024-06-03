const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const signUpRoute = require('./routes/signUp');
const signInRoute = require('./routes/signIn');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/sign-up', signUpRoute);
app.use('/api/sign-in', signInRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Add this route to get user information
app.get('/api/user-info', (req, res) => {
    // This is a placeholder. In a real app, you would get this information from the session or token.
    const user = {
        username: 'johndoe',
        name: 'John Doe',
        profileIcon: '/images/default-profile.png'  // Placeholder profile icon
    };
    res.json(user);
});
