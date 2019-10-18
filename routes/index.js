var express = require('express');
var passport = require('passport');
var flash = require('connect-flash');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/logout', isLoggedIn, function (req, res, next) {
    req.logout();
    res.redirect('/');
});

router.get('/signin', (req, res, next) => {
    var messages = req.flash('error');
    console.log(messages);
    res.render('user/signin', {csurfToken: req.csurfToken, messages: messages, hasError: messages.length > 0});

});
router.get('/signup', (req, res, next) => {
    var messages = req.flash('error');
    console.log(messages);
    res.render('user/signup', {csurfToken: req.csurfToken, messages: messages, hasError: messages.length > 0});

});

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/',
    failureRedirect: 'signup',
    failureFlash: true
}));

router.post('/signin', passport.authenticate('local.signin', {
    successRedirect: '/',
    failureRedirect: 'signin',
    failureFlash: true
}));

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
       return next();
    }
    res.redirect('/');
}

module.exports = router;