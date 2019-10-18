var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
});
router.get('/signin', (req, res, next) => {
    res.render('user/signin');
});
router.get('/signup', (req, res, next) => {
    res.render('user/signup');
});

module.exports = router;