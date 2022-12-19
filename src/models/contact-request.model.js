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
		return await contactRequestModel.find({}).sort({created_at: 1})
	} catch(err) {
		console.log(err);
	}
}

module.exports = {
	saveContactRequest,
	getContactRequests,
};
