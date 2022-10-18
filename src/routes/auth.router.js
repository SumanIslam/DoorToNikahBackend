const express = require('express');
const { signupPOST } = require('../controllers/auth.controllers')


const authRouter = express.Router();

authRouter.post('/users/auth/signup', signupPOST)

authRouter.post('/users/auth/login', async (req, res) => {
  const { email, password } = req.body;

})

module.exports = authRouter;