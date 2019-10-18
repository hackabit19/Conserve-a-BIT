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
},(req, email, password, done) => {
    req.checkBody('email', 'Invalid email').notEmpty().isEmail();
    //req.checkBody
    req.checkBody('password', 'Invalid password').notEmpty().isLength({min: 4});
    var errors = req.errors;
    console.log(req.flash('error'));
    //console.log(errors);
    if(errors) {
        var messages = [];
        errors.forEach(error => {
            console.log(error);
            messages.push(error);
        });
        //console.log(req.flash('error'));
        return done(null, false, req.flash('error', messages));
    }
    User.findOne({'email': email}, (err, user) =>{
        if(err)
            return done(err);
        if(user)
            return done(null, false, {message: "Email already in use"});
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
})
);

passport.use('local.signin', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {
    
    req.checkBody('email', 'Invalid email').notEmpty();
    req.checkBody('password', 'Invalid password').notEmpty();
    var errors = req.validationErrors();
    if(errors) {
        var messages = [];
        errors.forEach(error => {
            messages.push(error);
        });
        return done(null, false, req.flash('error', messages));
    }
    User.findOne({'email' : email}, (err, user) => {
        if(err) {
            return done(err);
        }
        if(!user) {
            return done(null, false, {message: 'No user found'});
        }
        if(!user.validPassword(password)) {
            return done(null, false, {message: 'Invalid password'});
        }
        return done(null, user);
    });
}
));