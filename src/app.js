const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

// router
const authRouter = require('./routes/auth.router');
const refreshRouter = require('./routes/refresh.router');
const registrationRouter = require('./routes/registration.router');
const biodataRouter = require('./routes/biodata.router');
const forgetAndResetRouter = require('./routes/forget-and-reset.router');

// cors option
const corsOptions = require('./config/corsOptions');

const app = express();

// middleware
app.use(cors(corsOptions));
app.use(morgan('combined'));
app.use(express.json());

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', req.headers.origin);
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
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

module.exports = app;