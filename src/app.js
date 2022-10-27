const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/auth.router');

// cors option
const corsOptions = require('./config/corsOptions');

const app = express();

// middleware
app.use(cors(corsOptions));
app.use(morgan('combined'));
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/v1/api', authRouter)

module.exports = app;