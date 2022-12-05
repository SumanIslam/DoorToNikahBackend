const express = require('express');

const { registrationPOST } = require('../controllers/biodataRegistration.controller')

const registrationRouter = express.Router();

registrationRouter.post('/registration', registrationPOST);

module.exports = registrationRouter;
