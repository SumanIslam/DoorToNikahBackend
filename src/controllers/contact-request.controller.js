const contactRequestModel = require('../mongoose/contact-request.mongo');
const userModel = require('../mongoose/user.mongo')

const {
	saveContactRequest,
	getContactRequests,
	contactRequestDone,
} = require('../models/contact-request.model');


const contactRequestPOST = async(req, res) => {
  const contactRequestDetails = req.body;
  console.log(req.body);

  const user = await userModel.findOne({email: contactRequestDetails.userEmail});
  
  console.log(user);

  if(!user) {
    return res.status(400).json({msg: 'Email is not registered.'})
  }

  try {
    const userContactRequestDetails = await saveContactRequest(contactRequestDetails);
    return res.status(200).json(userContactRequestDetails)
  } catch(err) {
    return res.status(500).json({ msg: 'Internal Server Error' });
  }
}

const contactRequestGET = async (req, res) => {
  try {
		const contactRequests = await getContactRequests();
		return res.status(200).json(contactRequests);
	} catch (err) {
		return res.status(500).json({ msg: 'Internal Server Error' });
	}
}

const contactRequestDoneGET = async (req, res) => {
  const { email } = req.query;

  const contactRequest = contactRequestModel.find({email: email});
  if(!contactRequest) {
    return res.status(400).json({msg: 'There is no contact request by this email'})
  }
  
  try {
    const result = await contactRequestDone(email);
    console.log(result);
    return res.status(200).json({msg: 'The contact request is done successfully'})
  } catch(err) {
		return res.status(500).json({ msg: 'Internal Server Error' });
  }
}

module.exports = {
	contactRequestPOST,
	contactRequestGET,
	contactRequestDoneGET,
};
