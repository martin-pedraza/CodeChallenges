var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const cors = require('cors');

var indexRouter = require('./routers/indexRouter');
var notesRouter = require('./routers/notesRouter');
var tagsRouter = require('./routers/tagsRouter');
var usersRouter = require('./routers/usersRouter');

var app = express();

app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: 'secreto-para-sesion',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

app.use('/', indexRouter);
app.use('/notes', notesRouter);
app.use('/tags', tagsRouter);
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
