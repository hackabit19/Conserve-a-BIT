var express = require('express');
var passport = require('passport');
var flash = require('connect-flash');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
});
router.get('/signin', (req, res, next) => {
    var messages = req.flash('error');
    console.log(messages);
    res.render('user/signup', {csurfToken: req.csurfToken, messages: messages, hasError: messages.length > 0});

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

module.exports = router;