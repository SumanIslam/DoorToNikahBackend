const contactRequestModel = require('../mongoose/contact-request.mongo');

async function saveContactRequest(contactRequestDetails) {
	try {
    return await contactRequestModel.create(contactRequestDetails);
	} catch (err) {
		console.log(err);
	}
}

async function getContactRequests() {
	try {
		return await contactRequestModel.find({ done: false }).sort({created_at: 1})
	} catch(err) {
		console.log(err);
	}
}

async function contactRequestDone(email) {
	try {
		return await contactRequestModel.findOneAndUpdate(
			{
				userEmail: email,
			},
			{
				done: true,
			},
			{
				upsert: true,
				returnOriginal: false,
			}
		);
	} catch(err) {
		console.log(err);
	}
}

module.exports = {
	saveContactRequest,
	getContactRequests,
	contactRequestDone,
};
