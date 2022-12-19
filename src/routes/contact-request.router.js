const express = require('express');

const {
	contactRequestPOST,
	contactRequestGET,
} = require('../controllers/contact-request.controller');

const contactRequestRouter = express.Router();

contactRequestRouter.post('/contact-request', contactRequestPOST);
contactRequestRouter.get('/contact-request', contactRequestGET);

module.exports = contactRequestRouter;
