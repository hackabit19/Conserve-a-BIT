var express = require('express');
var passport = require('passport');
var flash = require('connect-flash');
var web3 = require('web3');
var generator = require('../abi/generator');
var project = require('../abi/project');
//var web3 = require('../abi/web3');
const HDWalletProvider = require('truffle-hdwallet-provider');

const provider = new HDWalletProvider(
	'perfect upgrade curious dream surround rack reason inspire kingdom famous fruit puppy',
	'	https://rinkeby.infura.io/v3/cdc1d04901634213b13ff2c7f29bc313'
);
const web3js = new web3(provider);
//

var router = express.Router();

//var web3js = new web3(new web3.providers.HttpProvider("https://ropsten.infura.io/cdc1d04901634213b13ff2c7f29bc313"));
//console.log(web3.currentProvider);

router.get('/', async (req, res, next) => {
    var account = await web3js.eth.getAccounts();
    var pro = await generator.methods.AllProjects().call().then((pro) => {
        
        pro.forEach((projects) => {
            
              console.log(projects.description);
            });

        //console.log(add[0]);
    });
    
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
    var account = await web3js.eth.getAccounts();
     //console.log(account);
    //  await generator.methods.createProjects(
    //      req.params.deadline,
    //      req.params.desc,
    //      req.params.goal
    //  ).send({
    //      from: account,
    //  }).then(() => {
    //      console.log("done");
    //  }).catch({});
     //abi.methods.support()
     await generator.methods.createProject(
         req.body.deadline,
         req.body.desc,
         req.body.goal
     ).send({
         gas: '4712388',
         from: account[0]
     });
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
       return next();
    }
    res.redirect('/');
}

module.exports = router;