var express = require('express');
var bodyParser = require('body-parser');
var expresshbs = require('express-handlebars');
var session = require('express-session');
var validator = require('express-validator');
var mongoose = require('mongoose');
var path = require('path');
var passport = require('passport');
var flash = require('connect-flash');
var mongoStore = require('connect-mongo')(session);
var index = require('./routes/index');
var app = express();
require('./config/passport');

//Database
var db = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/blockFunding',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
db.once('open', () => {
    console.log("database connected");
});

//middlewares
app.engine('.hbs', expresshbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set("view engine", "hbs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
    secret: 'fundSession',
    resave: false,
    saveUninitialized: false,
    store: new mongoStore({mongooseConnection: db}),
    cookie: {}
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(validator());


app.use((req, res, next) => {
    res.locals.login = req.isAuthenticated();
    //console.log(login);
    //console.log(req.session);
    res.locals.session = req.session;
    next();
});
app.use('/', index);

app.listen(5000);