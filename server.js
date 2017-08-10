var express = require('express');
var app = express();
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');




//BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname + '/app/public')));

//Passport
app.use(session({secret: 'secretsumo', resave: true, saveUninitialized: true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions



app.get('/', function (req, res) {
    var normalized_path = path.normalize(__dirname + '/app/views/index.html');
    res.sendFile(normalized_path);
});

//Models
var models = require("./app/models");

//Routes
var authRoute = require('./app/routes/auth.js')(app, passport);

//Passport - Local Strategy
require('./app/config/passport/passport.js')(passport, models.user);

require('./app/controllers/questioncontroller.js');

//Sync Database
models.sequelize.sync().then(function () {
    console.log('Successfully synced with Database.');
});

app.listen(3000, function (err) {
    if (!err)
        console.log("Site is live"); else console.log(err)

});




    