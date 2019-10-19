var express = require('express');
var passport = require('passport');
var flash = require('connect-flash');
var web3 = require('web3');
var generator = require('../abi/generator');
var project = require('../abi/project');
//var web3 = require('../abi/web3');

var router = express.Router();

var web3js = new web3(web3.currentProvider);
//console.log(web3js);

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
router.get('/addproject', (req, res, next) => {
    res.render('addproject');
});

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.post('/signin', passport.authenticate('local.signin', {
    successRedirect: '/',
    failureRedirect: '/signin',
    failureFlash: true
}));

router.post('/addproject', async (req, res, next) => {
    //console.log("addproject");
    //res.render('index');
     var account = await web3js.eth.getAccounts();
     
     console.log(account[0]);
     await generator.methods.createProjects(
         req.params.deadline,
         req.params.desc,
         req.params.goal
     ).send({
         from: account[0],
     }).then(() => {
         console.log("done");
     }).catch({});
     //abi.methods.support()
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
       return next();
    }
    res.redirect('/');
}

module.exports = router;