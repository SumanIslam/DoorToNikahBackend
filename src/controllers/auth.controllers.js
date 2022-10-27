const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { saveUser } = require("../models/user.model")
const usersModel = require('../mongoose/user.mongo');

require('dotenv').config();


const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
const MinAge = 3 * 24 * 60 * 60;
const maxAge = 720 * 24 * 60 * 60;

// jwt token
const createAccessToken = (id) => {
	return jwt.sign({ id }, ACCESS_TOKEN_SECRET, {
		expiresIn: MinAge,
	});
};
const createRefreshToken = (id) => {
	return jwt.sign({ id }, REFRESH_TOKEN_SECRET, {
		expiresIn: maxAge,
	});
};

// signup post route controller
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

const loginPOST = async (req, res) => {
  const { email, password } = req.body;

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
		maxAge: maxAge * 1000,
		secure: true,
		sameSite: 'None'
	});

	return res.status(200).json({accessToken});
}

module.exports = {
  signupPOST,
  loginPOST
}