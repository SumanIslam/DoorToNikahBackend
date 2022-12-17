const {
	getSingleBiodata,
	deleteSingleBiodata,
	getTotalCountOfBiodata,
	getTotalMaleCountOfBiodata,
	getTotalFemaleCountOfBiodata,
	getBiodatasUploadedThisWeek,
	getBiodatasUploadedIn15Days,
	getBiodatasUploadedInMonth,
	getBiodatasUploadedInYear,
} = require('../models/biodata.model');

const { getBiodatas } = require('../services/getBiodatas-helper');
const {
	getBiodatasWithPagination,
} = require('../services/getBiodatas-with-pagination-helper');

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
		const totalMaleBiodataCount = await getTotalMaleCountOfBiodata();
		const totalFemaleBiodataCount = await getTotalFemaleCountOfBiodata();
		
		return res.status(200).json({totalBiodataCount, totalMaleBiodataCount, totalFemaleBiodataCount});
	} catch (err) {
		return res.status(500).json({ msg: 'Internal Server Error' });
	}
};

// get biodatas uploaded this week
const biodatasUploadedThisWeekGET = async (req, res) => {
	try {
		const biodatas = await getBiodatasUploadedThisWeek();
		return res.status(200).json(biodatas);
	} catch (err) {
		return res.status(500).json({ msg: 'Internal Server Error' });
	}
}

// get biodatas uploaded in 15 days
const biodatasUploadedIn15DaysGET = async (req, res) => {
	try {
		const biodatas = await getBiodatasUploadedIn15Days();
		return res.status(200).json(biodatas);
	} catch (err) {
		return res.status(500).json({ msg: 'Internal Server Error' });
	}
}

// get biodatas uploaded in a month
const biodatasUploadedInaMonthGET = async (req, res) => {
	try {
		const biodatas = await getBiodatasUploadedInMonth();
		return res.status(200).json(biodatas);
	} catch (err) {
		return res.status(500).json({ msg: 'Internal Server Error' });
	}
};
// get biodatas uploaded in a month
const biodatasUploadedInaYearGET = async (req, res) => {
	try {
		const biodatas = await getBiodatasUploadedInYear();
		return res.status(200).json(biodatas);
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
	biodatasUploadedThisWeekGET,
	biodatasUploadedIn15DaysGET,
	biodatasUploadedInaMonthGET,
	biodatasUploadedInaYearGET,
};
