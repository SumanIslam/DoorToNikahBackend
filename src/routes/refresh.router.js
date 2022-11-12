const express = require('express');
const handleRefreshToken = require('../controllers/refreshToken.controller')

const refreshRouter = express.Router();

refreshRouter.get('/', handleRefreshToken);


module.exports = refreshRouter;
