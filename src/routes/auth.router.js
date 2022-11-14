const express = require('express');
const { signupPOST, loginPOST, logOut } = require('../controllers/auth.controllers')


const authRouter = express.Router();

authRouter.post('/users/auth/signup', signupPOST)

authRouter.post('/users/auth/login', loginPOST)
authRouter.get('/users/auth/logout', logOut)

module.exports = authRouter;