const {
	getSingleBiodata,
	deleteSingleBiodata,
	getTotalCountOfBiodata,
	getTotalMaleCountOfBiodata,
	getTotalFemaleCountOfBiodata,
} = require('../models/biodata.model');

const { getBiodatas } = require('../services/getBiodatas-helper');
const {
	getBiodatasWithPagination,
} = require('../services/getBiodatas-with-pagination-helper');

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

// get biodatas from db
const BiodatasGET = async (req, res) => {
	try {
		const biodatas = await getBiodatas(req.query.BiodataDetails);
		return res.status(200).json(biodatas);
	} catch(err) {
		console.log(err);
		return res.status(500).json({ msg: 'Internal Server Error' });
	}
};

// get biodatas from db
const BiodatasWithPaginationGET = async (req, res) => {
	const page = parseInt(req.query.page, 10) || 1;
	const limit = parseInt(req.query.limit, 10) || 12;
	try {
		const biodatas = await getBiodatasWithPagination(
			req.query.BiodataDetails,
			page,
			limit
		);
		return res.status(200).json(biodatas);
	} catch(err) {
		console.log(err);
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
	BiodatasGET,
	BiodatasWithPaginationGET,
};
