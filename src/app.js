const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const authRouter = require('./routes/auth.router');

const app = express();

// middleware
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(morgan('combined'))
app.use(express.json());

// routes
app.use('/v1/api', authRouter)

module.exports = app;