const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')

// router
const authRouter = require('./routes/auth.router');
const refreshRouter = require('./routes/refresh.router')

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
app.use(cookieParser());

// routes
app.use('/v1/api', authRouter);
app.use('/refresh', refreshRouter)

module.exports = app;