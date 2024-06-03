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
