const express = require('express');
const {
	forgetPasswordPOST,
	resetPasswordGET,
	resetPasswordPOST,
	changePasswordPOST,
} = require('../controllers/forget-and-reset.controller');

const forgetAndResetRouter = express.Router();

forgetAndResetRouter.post('/password/forget-password', forgetPasswordPOST);
forgetAndResetRouter.get(
	'/password/reset-password/:id/:token',
	resetPasswordGET
);
forgetAndResetRouter.post(
	'/password/reset-password/:id/:token',
	resetPasswordPOST
);
forgetAndResetRouter.post(
	'/password/change-password',
	changePasswordPOST
);

module.exports = forgetAndResetRouter;
