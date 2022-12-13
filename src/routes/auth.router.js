const express = require('express');
const passport = require('passport');
const { signupPOST, loginPOST, logOut } = require('../controllers/auth.controllers')

const CLIENT_URL = 'http://localhost:3000/';

const authRouter = express.Router();

authRouter.post('/users/auth/signup', signupPOST)
authRouter.post('/users/auth/login', loginPOST)
authRouter.get('/users/auth/logout', logOut)

// google auth failed routes
authRouter.get('/login/failed', (req, res) => {
  return res.status(401).json({msg: 'Sorry, Login failed. Try again later'})
})
// google auth success routes
authRouter.get('/login/success', (req, res) => {
  res.redirect(CLIENT_URL)
  
})
// google auth success routes
authRouter.get('/login/success/again', (req, res) => {
  console.log('user', req.session.id);
  if(req.user) {
    return res
			.status(200)
			.json({ msg: 'You have logged in successfully'});
  }
  return res.status(400).json({ msg: 'something went wrong' });
  
})
// google authenticate
authRouter.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['profile', 'email'],
	})
);

authRouter.get(
	'/auth/google/callback',
	passport.authenticate('google', {
		successRedirect: 'http://localhost:5000/v1/api/login/success',
		failureRedirect: '/login/failed'
	})
);

module.exports = authRouter;