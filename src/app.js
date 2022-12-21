const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const cookieSession = require('cookie-session')
const passportSetup = require('./services/passport-setup');

// router
const authRouter = require('./routes/auth.router');
const refreshRouter = require('./routes/refresh.router');
const registrationRouter = require('./routes/registration.router');
const biodataRouter = require('./routes/biodata.router');
const forgetAndResetRouter = require('./routes/forget-and-reset.router');
const contactRequestRouter = require('./routes/contact-request.router')

// cors option
const corsOptions = require('./config/corsOptions');

const app = express();

// middleware
app.use(cors(corsOptions));
app.use(morgan('combined'));
app.use(express.json());

// cookie session
app.use(
	cookieSession({
		name: 'session',
		maxAge: 24 * 60 * 60 * 1000,
		keys: [process.env.COOKIE_KEY],
	})
);

// passport initialize
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', req.headers.origin);
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept',
	);
	res.header('Access-Control-Allow-Credentials', true);
  	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH');
	next();
});

// views (ejs)
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());

// routes
app.use('/v1/api', authRouter);
app.use('/refresh', refreshRouter);
app.use('/v1/api', registrationRouter);
app.use('/v1/api', biodataRouter);
app.use('/v1/api', forgetAndResetRouter);
app.use('/v1/api', contactRequestRouter);

module.exports = app;
