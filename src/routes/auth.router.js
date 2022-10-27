const express = require('express');
const { signupPOST, loginPOST } = require('../controllers/auth.controllers')


const authRouter = express.Router();

authRouter.post('/users/auth/signup', signupPOST)

authRouter.post('/users/auth/login', loginPOST)

module.exports = authRouter;