const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();
const userModel = require('../mongoose/user.mongo')

const { getUser } = require('../models/user.model')

const config = {
	GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
};

passport.use(
	new GoogleStrategy(
		{
			clientID: config.GOOGLE_CLIENT_ID,
			clientSecret: config.GOOGLE_CLIENT_SECRET,
			callbackURL: '/v1/api/auth/google/callback',
		},
		async function (accessToken, refreshToken, profile, done) {
			const userCredential = {
				userName: profile.displayName,
				email: profile.emails[0].value
			}
			const user = await userModel.findOneAndUpdate(
				{
					email: userCredential.email,
				},
				userCredential,
				{
					upsert: true,
				}
			);

			done(null, user);
		}
	)
);


// serializeUser function to save user in browser cookie
passport.serializeUser((user, done) => {
	done(null, user.id);
});

// deSerializeUser function to get the cooking from browser
passport.deserializeUser((id, done) => {
	getUser(id).then((user) => {
		done(null, user);
	});
});

// GoogleStrategy option goes here
// const googleAuthOptions = {
// 	clientID: config.GOOGLE_CLIENT_ID,
// 	clientSecret: config.GOOGLE_CLIENT_SECRET,
// 	callbackURL: '/v1/api/auth/google/callback',
// };

// // passport callback function
// const verifyCallback = async (accessToken, refreshToken, profile, cb) => {
//   const userCredential = {
// 		userName: profile.displayName,
//    	email: profile.emails[0].value
// 	}
// 	const user = await await userModel.findOneAndUpdate(
// 		{
// 			email: userCredential.email,
// 		},
// 		userCredential,
// 		{
// 			upsert: true,
// 		}
// 	);

// 	cb(null, user);
// };

// passport.use(new GoogleStrategy(googleAuthOptions, verifyCallback));