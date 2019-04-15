var createError = require('http-errors');
var express = require('express');
//site to learn this tutorial https://getbuzz.io/c/learning-expressjs
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');//represents the route exported by landing.js from the routes directory
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));//we include the views in a directory called views
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);//when the route '/' is typed we are making a call to the indexRouter to handle that for us
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
//http protocol exposes many methods to us
//the first method is http.get-> allows us to fetch any resources from the web server
//in our index router example server will respond with res.render() a special function that comes from expres that renders html files
//server sed=nd a web page
//http.post-> which is used to submit some data to the web server//server updates some data and res.redirect will redirect user to a new route
