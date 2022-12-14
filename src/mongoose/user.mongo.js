const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	roles: {
		User: {
			type: Number,
			default: 2001
		},
		Admin: Number,
		Editor: Number,
	},
	refreshToken: String,
	biodataId: {
		type: String,
		default: ''
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const usersModel = mongoose.model('User', userSchema);

module.exports = usersModel;
