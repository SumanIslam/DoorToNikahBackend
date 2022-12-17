const contactRequestModel = require('../mongoose/contact-request.mongo');
const userModel = require('../mongoose/user.mongo')

const { saveContactRequest } = require('../models/contact-request.model')


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

module.exports = contactRequestPOST;
