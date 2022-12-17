const express = require('express');

const contactRequestPOST = require('../controllers/contact-request.controller')

const contactRequestRouter = express.Router();

contactRequestRouter.post('/contact-request', contactRequestPOST);

module.exports = contactRequestRouter;
