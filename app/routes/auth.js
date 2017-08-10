var authController = require('../controllers/authcontroller.js');
var questionController = require('../controllers/questioncontroller.js');

module.exports = function (app, passport) {

    app.get('/signin', authController.signin);

    app.get('/admin', isLoggedIn, authController.admin);

    app.get('/logout', authController.logout);

    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/admin',
            failureRedirect: '/signin'
        }
    ));

    app.post('/submit', isLoggedIn, questionController.submit);


    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/signin');
    }
};






