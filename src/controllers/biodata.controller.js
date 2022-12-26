const {
	saveBiodata,
	getSingleBiodata,
	deleteSingleBiodata,
	getTotalCountOfBiodata,
	getTotalCountOfApprovedBiodata,
	getTotalMaleCountOfBiodata,
	getTotalMaleCountOfApprovedBiodata,
	getTotalFemaleCountOfBiodata,
	getTotalFemaleCountOfApprovedBiodata,
	getBiodatasUploadedThisWeekCount,
	getBiodatasUploadedIn15DaysCount,
	getBiodatasUploadedInMonthCount,
	getBiodatasUploadedInYearCount,
	getTotalUnmarriedBiodatasCount,
	getTotalMarriedBiodatasCount,
	getTotalDivorcedBiodatasCount,
	getTotalWidowBiodatasCount,
	getTotalWidowerBiodatasCount,
	getTotalBiodatas,
	getAllUnApprovedBiodatas,
	getAllUnApprovedBiodatasWithPagination,
} = require('../models/biodata.model');

// services
const { getBiodatas } = require('../services/getBiodatas-helper');
const {
	getBiodatasWithPagination,
} = require('../services/getBiodatas-with-pagination-helper');
const { getApprovedBiodatas } = require('../services/getApprovedBiodatas')
const {getApprovedBiodatasWithPagination} = require('../services/getApprovedBiodatasWithPagination')

const biodataModel = require('../mongoose/biodata.mongo');

// get single biodata from db
const SingleBiodataGET = async (req, res) => {
  const biodataId = req.query.biodataId;

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

// get approved biodatas from db
const approvedBiodatasGET = async (req, res) => {
	try {
		const biodatas = await getApprovedBiodatas(req.query.BiodataDetails);
		return res.status(200).json(biodatas);
	} catch (err) {
		console.log(err);
		return res.status(500).json({ msg: 'Internal Server Error' });
	}
};

// get biodatas with pagination from db
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

// get approved biodatas with pagination from db
const approvedBiodatasWithPaginationGET = async (req, res) => {
	const page = parseInt(req.query.page, 10) || 1;
	const limit = parseInt(req.query.limit, 10) || 12;

	try {
		const biodatas = await getApprovedBiodatasWithPagination(
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

// delete a single biodata
const deleteBiodataGET = async (req, res) => {
	const biodataId = req.query.biodataId;

	try {
		return await deleteSingleBiodata(biodataId);
	} catch(err) {
		return res.status(500).json({ msg: 'Internal Server Error' });
	}
}

// count all the biodatas, male biodatas, female biodatas
const countBiodataGET = async (req, res) => {
	try {
		const totalBiodataCount = await getTotalCountOfBiodata();
		const totalApprovedBiodataCount = await getTotalCountOfApprovedBiodata();
		const totalMaleBiodataCount = await getTotalMaleCountOfBiodata();
		const totalMaleApprovedBiodataCount =
			await getTotalMaleCountOfApprovedBiodata();
			const totalFemaleApprovedBiodataCount =
				await getTotalFemaleCountOfApprovedBiodata();
		const totalFemaleBiodataCount = await getTotalFemaleCountOfBiodata();
		const totalBiodataUploadedThisWeekCount = await getBiodatasUploadedThisWeekCount();
		const totalBiodataUploadedIn15DaysCount = await getBiodatasUploadedIn15DaysCount();
		const totalBiodataUploadedInaMonthCount = await getBiodatasUploadedInMonthCount();
		const totalBiodataUploadedInaYearCount = await getBiodatasUploadedInYearCount();
		const totalUnmarriedBiodataCount = await getTotalUnmarriedBiodatasCount();
		const totalMarriedBiodataCount = await getTotalMarriedBiodatasCount();
		const totalDivorcedBiodataCount = await getTotalDivorcedBiodatasCount();
		const totalWidowBiodataCount = await getTotalWidowBiodatasCount();
		const totalWidowerBiodataCount = await getTotalWidowerBiodatasCount();
		
		return res.status(200).json({
			totalBiodataCount,
			totalApprovedBiodataCount,
			totalMaleBiodataCount,
			totalMaleApprovedBiodataCount,
			totalFemaleBiodataCount,
			totalFemaleApprovedBiodataCount,
			totalBiodataUploadedThisWeekCount,
			totalBiodataUploadedIn15DaysCount,
			totalBiodataUploadedInaMonthCount,
			totalBiodataUploadedInaYearCount,
			totalUnmarriedBiodataCount,
			totalMarriedBiodataCount,
			totalDivorcedBiodataCount,
			totalWidowBiodataCount,
			totalWidowerBiodataCount,
		});
	} catch (err) {
		return res.status(500).json({ msg: 'Internal Server Error' });
	}
};

// get all unapproved biodatas
const totalUnApproveBiodatasGET = async (req, res) => {
	try {
		const biodatas = await getAllUnApprovedBiodatas();
		return res.status(200).json(biodatas);
	} catch(err){
		return res.status(500).json({ msg: 'Internal Server Error' });
	}
}

// get all unapproved biodatas with pagination
const totalUnApproveBiodatasWithPaginationGET = async (req, res) => {
	const { page } = req.query;
	console.log(page);
	const limit = 12;
	const skip = (page - 1) * limit;

	try {
		const biodatas = await getAllUnApprovedBiodatasWithPagination(skip, limit);
		return res.status(200).json(biodatas);
	} catch(err){
		return res.status(500).json({ msg: 'Internal Server Error' });
	}
}

// post accepted biodata
const acceptedBiodataPOST = async (req, res) => {
	try {
		const biodata = req.body;
		console.log(req.body);
		const acceptedBiodata = await saveBiodata(biodata)
		return res.status(200).json(acceptedBiodata);
	} catch(err) {
		return res.status(500).json({ msg: 'Internal Server Error' });
	}
	
}

module.exports = {
	SingleBiodataGET,
	deleteBiodataGET,
	countBiodataGET,
	BiodatasGET,
	approvedBiodatasGET,
	BiodatasWithPaginationGET,
	totalUnApproveBiodatasGET,
	totalUnApproveBiodatasWithPaginationGET,
	acceptedBiodataPOST,
	approvedBiodatasGET,
	approvedBiodatasWithPaginationGET,
};
