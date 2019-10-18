var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var User = require('../models/user');

passport.serializeUser((user, done) => {
    return done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        return done(err, user);
    });
});

passport.use('local.signup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {
    req.checkBody('email', 'Invalid email').notEmpty().isEmail();
    req.checkBody('password', 'Invalid password').notEmpty().isLength({min: 4});
    var errors = req.errors;
    if(errors) {
        var messages = [];
        errors.forEach(error => {
            messages.push(error);
        });
    }
    User.findOne({'email': email}, (err, user) => {
        if(err) {
            return done(err);
        }
        if(user) {
            return done(null, false, {message: 'Email already in use'});
        }
    });
    var newUser = new User();
    newUser.email = email;
    newUser.password = newUser.encryptPassword(password);
    newUser.save((err, result) => {
        if(err) {
            return done(err);
        }
        else {
            return done(null, newUser);
        }
    
    });
}
));