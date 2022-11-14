const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { saveUser } = require("../models/user.model")
const usersModel = require('../mongoose/user.mongo');

const { createAccessToken, createRefreshToken } = require('../services/tokenGeneration');

// signup controller
const signupPOST =  async (req, res) => {
	const { name, email, password, confirmPassword } = req.body;

	// checking the length of password
	if (password.length < 6) {
		return res
			.status(400)
			.json({ msg: 'Passwords must be at least 6 characters long' });
	}

	// checking both passwords are correct or not
	if (password !== confirmPassword) {
		return res.status(400).json({ msg: 'Passwords do not match' });
	}

	// checking existing user through email
	const user = await usersModel.findOne({ email: email });

	// if user exists error will be thrown
	if (user) {
		return res.status(400).json({ msg: 'Email is already exists' });
	} else {
		const newUser = {
			name,
			email,
			password,
		};
		// saving user to db
		try {
			const userData = await saveUser(newUser);
			return res.status(200).json(userData);
		} catch (err) {
			return res.status(500).json({ msg: 'Internal Server Error' });
		}
	}
}

// login controller
const loginPOST = async (req, res) => {
  const { email, password } = req.body;
	const cookies = req.cookies;

  let user = await usersModel.findOne({ email: email }).exec();

	// check if user is exist or not
  if(!user) {
    return res.status(400).json({msg: 'Email is not registered'})
  }

	// check password is correct or not
  const correctPassword = await bcrypt.compare(password, user.password);

  if(!correctPassword) {
    return res.status(400).json({ msg: 'Password is incorrect' });
  }

	// generating accessToken and refreshToken
  const accessToken = createAccessToken(user._id);
  const refreshToken = createRefreshToken(user._id);

	// save refreshToken in db
	await usersModel.findByIdAndUpdate(
		{ _id: user._id },
		{ refreshToken: refreshToken }
	);

	res.cookie('_refresh_token', refreshToken, {
		httpOnly: true,
		secure: false,
		sameSite: 'None'
	});

	const userResponse = {
		userId: user._id,
		userName: user.name,
		roles: user.roles,
	}

	return res.status(200).json({...userResponse, accessToken});
}

// logout controller
const logOut = async (req, res) => {
	// On client, delete the access token
	const cookies = req.cookies;

	if (!cookies?._refresh_token) {
		return res.sendStatus(204); // Successful, No content
	} 

	// refresh token
	const refreshToken = cookies._refresh_token;

	// Is refresh token exists in db?
	const user = await usersModel.findOne({ refreshToken: refreshToken });

	if (!user) {
		res.clearCookie('_refresh_token', { httpOnly: true });

		return res.sendStatus(204); // Successful, No content
	}

	// delete refresh token from db
	await usersModel.findOneAndUpdate(
		{ refreshToken: refreshToken },
		{
			refreshToken: '',
		}
	);

	res.clearCookie('_refresh_token', { httpOnly: true });

	return res.sendStatus(204);
};

module.exports = {
  signupPOST,
  loginPOST,
	logOut
}