const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(session({secret: "idoubtthiswillwork"}));
app.use(passport.initialize());
app.use(passport.session());

app.use("/static", express.static("public"));

// require('./server/routes')(app, passport);
app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname + '/index.html')));


app.get('*', (req, res) => res.status(200).send({
	message: 'Welcome to the end of it all'
}));

module.exports = app;