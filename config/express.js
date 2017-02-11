const config = require('./config');
const express = require('express');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const path = require('path');
const cookieParser = require('cookie-parser');


module.exports = function() {
    const app = express();

//log or compress
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
}));

app.set('views', './app/views');
app.set('view engine', 'ejs');
app.use(methodOverride());
app.use(cookieParser());    

//Routes
require('../app/routes/index.server.routes.js')(app);

app.use(express.static('./public'));


//404 catcher to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) =>{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
return app;
};