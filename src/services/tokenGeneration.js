const jwt = require('jsonwebtoken');
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

module.exports = {
	createAccessToken,
	createRefreshToken,
};
