var express = require('express');
var bodyParser = require('body-parser');
var expresshbs = require('express-handlebars');
var session = require('express-session');
var validator = require('express-validator');
var mongoose = require('mongoose');
var path = require('path');
var mongoStore = require('connect-mongo')(session);
var index = require('./routes/index');
var app = express();

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
app.use(session({
    secret: 'fundSession',
    resave: false,
    saveUninitialized: false,
    store: new mongoStore({mongooseConnection: db}),
    cookie: {}
}));

app.use('/', index);

app.listen(5000);