const jwt = require('jsonwebtoken');
const { saveUser } = require("../models/user.model")
const usersModel = require('../mongoose/user.mongo');

require('dotenv').config();


const  JWT_SECRET = process.env.privateKey
const maxAge = 3 * 24 * 60 * 60;

// jwt token
const createToken = (id) => {
	return jwt.sign({ id }, JWT_SECRET, {
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
			const token = createToken(userData._id);
			res.cookie('jwt', token, {
				httpOnly: true,
				maxAge: maxAge * 1000,
			});

			return res.status(200).json(userData);
		} catch (err) {
			return res.status(500).json({ msg: 'Internal Server Error' });
		}
	}
}

module.exports = {
  signupPOST
}