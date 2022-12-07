const { getSingleBiodata } = require('../models/biodata.model');
const biodataModel = require('../mongoose/biodata.mongo');

const SingleBiodataGET = async (req, res) => {
  const biodataId = req.query.biodataId;

	// get single biodata from db
	try {
		const biodata = await getSingleBiodata(biodataId);
		return res.status(200).json(biodata);
	} catch (err) {
		return res.status(500).json({ msg: 'Internal Server Error' });
	}
};

module.exports = {
	SingleBiodataGET,
};
