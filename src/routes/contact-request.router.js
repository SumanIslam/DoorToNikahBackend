const express = require('express');

const {
	contactRequestPOST,
	contactRequestGET,
	contactRequestDoneGET,
} = require('../controllers/contact-request.controller');

const contactRequestRouter = express.Router();

contactRequestRouter.post('/contact-request', contactRequestPOST);
contactRequestRouter.get('/contact-request', contactRequestGET);
contactRequestRouter.get('/contact-request/done', contactRequestDoneGET)

module.exports = contactRequestRouter;
