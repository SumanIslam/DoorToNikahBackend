const mongoose = require('mongoose');

const contactRequestSchema = new mongoose.Schema({
	userName: {
		type: String,
		required: true,
	},
	userEmail: {
		type: String,
		required: true,
	},
	userMobileNumber: {
		type: String,
		required: true,
	},
	numberOfBiodata: {
		type: String,
		required: true,
	},
	totalCost: {
		type: String,
		required: true,
	},
	biodatasId: {
		type: String,
		required: true,
	},
	bkashNumber: {
		type: String,
		default: '',
	},
	bkashTransactionId: {
		type: String,
		default: '',
	},
	rocketNumber: {
		type: String,
		default: '',
	},
	rocketTransactionId: {
		type: String,
		default: '',
	},
	NagadNumber: {
		type: String,
		default: '',
	},
	NagadTransactionId: {
		type: String,
		default: '',
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
	done: {
		type: Boolean,
		default: false,
	}
});

const contactRequestModel = mongoose.model('ContactRequest', contactRequestSchema);

module.exports = contactRequestModel;
