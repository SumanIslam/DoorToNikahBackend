const contactRequestModel = require('../mongoose/contact-request.mongo');

async function saveContactRequest(contactRequestDetails) {
	try {
    return await contactRequestModel.create(contactRequestDetails);

		return userContactRequestDetails;
	} catch (err) {
		console.log(err);
	}
}

module.exports = {
	saveContactRequest,
};
