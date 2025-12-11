const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"));

const port = process.env.PORT;

const aniData = require('./data.json');

app.get('/ag', (req, res) => {
    res.render('homePg.ejs', { data: aniData });
});

app.get('/ag/:username', (req, res) => {
    let { username } = req.params;
    console.log(`request received for username ${username}`);
    let profileData = aniData[username];
    res.render('profile.ejs', { username: username, data: profileData });
});

app.listen(port, () => {
    console.log(`App is listening on port : ${port}`);
});