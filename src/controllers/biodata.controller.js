const {
	getSingleBiodata,
	deleteSingleBiodata,
	getTotalCountOfBiodata,
	getTotalMaleCountOfBiodata,
	getTotalFemaleCountOfBiodata,
} = require('../models/biodata.model');
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

const deleteBiodataGET = async (req, res) => {
	const biodataId = req.query.biodataId;

	// delete a single biodata
	try {
		return await deleteSingleBiodata(biodataId);
	} catch(err) {
		return res.status(500).json({ msg: 'Internal Server Error' });
	}
}
const countBiodataGET = async (req, res) => {

	// count all the biodata, male biodata and female biodata
	try {
		const totalBiodataCount = await getTotalCountOfBiodata();
		const totalMaleBiodataCount = await getTotalMaleCountOfBiodata();
		const totalFemaleBiodataCount = await getTotalFemaleCountOfBiodata();
		
		return res.status(200).json({totalBiodataCount, totalMaleBiodataCount, totalFemaleBiodataCount});
	} catch (err) {
		return res.status(500).json({ msg: 'Internal Server Error' });
	}
};

module.exports = {
	SingleBiodataGET,
	deleteBiodataGET,
	countBiodataGET,
};
