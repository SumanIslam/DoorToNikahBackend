const biodataModel = require('../mongoose/biodata.mongo');
const { daysInThisMonth, daysInYear } = require('../services/dates');

// save single biodata to db
async function saveBiodata(newBiodata) {
  try {
    const biodata = await biodataModel.findOneAndUpdate(
			{
				biodataId: newBiodata.biodataId,
			},
			newBiodata,
			{
				upsert: true,
				returnOriginal: false,
			}
		);
    return biodata;
  } catch(err) {
    console.log(err);
  }
}

// get single biodata from db
async function getSingleBiodata(biodataId) {
  try {
    const biodata = await biodataModel.findOne({biodataId: biodataId})
    return biodata;
  } catch(err) {
    console.log(err);
  }
}

// delete single biodata from db
async function deleteSingleBiodata(biodataId) {
  console.log(biodataId);
  try {
    return await biodataModel.findOneAndDelete({biodataId: biodataId});
  } catch(err) {
    console.log(err)
  }
}

// get total counts of biodata
async function getTotalCountOfBiodata() {
  try {
    return await biodataModel.countDocuments();
  } catch(err) {
    console.log(err)
  }
}

// get total counts of male biodata
async function getTotalMaleCountOfBiodata() {
  try {
    return await biodataModel.countDocuments({
			'generalInfo.biodataType': 'পাত্রের বায়োডাটা',
		});
  } catch(err) {
    console.log(err)
  }
}

// get total counts of female biodata
async function getTotalFemaleCountOfBiodata() {
  try {
    return await biodataModel.countDocuments({
			'generalInfo.biodataType': 'পাত্রীর বায়োডাটা',
		});
  } catch(err) {
    console.log(err)
  }
}

// get biodatas uploaded in 7 days from now
async function getBiodatasUploadedThisWeekCount() {
  try {
		// Get today's date using the JavaScript Date object.
		let ourDate = new Date();

		// Change it so that it is 7 days in the past.
		let pastDate = ourDate.getDate() - 7;
		ourDate.setDate(pastDate);

		return await biodataModel
			.countDocuments({ date: { $gt: ourDate, $lt: Date.now() } });
	}catch(err) {
    console.log(err);
  }
}

// get biodatas uploaded in 15 days from now
async function getBiodatasUploadedIn15DaysCount() {
  try {
		// Get today's date using the JavaScript Date object.
		let ourDate = new Date();

		// Change it so that it is 7 days in the past.
		let pastDate = ourDate.getDate() - 15;
		ourDate.setDate(pastDate);

		return await biodataModel
			.countDocuments({ date: { $gt: ourDate, $lt: Date.now() } });
	}catch(err) {
    console.log(err);
  }
}

// get biodatas uploaded in a month from now
async function getBiodatasUploadedInMonthCount() {
  try {
		// Get today's date using the JavaScript Date object.
		let ourDate = new Date();

    // Get number of days in this month
    let numberOfDaysInThisMonth = daysInThisMonth();

		// Change it so that it is 7 days in the past.
		let pastDate = ourDate.getDate() - numberOfDaysInThisMonth;
		ourDate.setDate(pastDate);

		return await biodataModel.countDocuments({
			date: { $gt: ourDate, $lt: Date.now() },
		});
	}catch(err) {
    console.log(err);
  }
}

// get biodatas uploaded in a year from now
async function getBiodatasUploadedInYearCount() {
  try {
		// Get today's date using the JavaScript Date object.
		let ourDate = new Date();

    // Get number of days in this year
    let numberOfDaysInThisYear = daysInYear(ourDate.getFullYear);

		// Change it so that it is 7 days in the past.
		let pastDate = ourDate.getDate() - numberOfDaysInThisYear;
		ourDate.setDate(pastDate);

		return await biodataModel
			.countDocuments({ date: { $gt: ourDate, $lt: Date.now() } });
	}catch(err) {
    console.log(err);
  }
}

// get total unmarried biodatas count
async function getTotalUnmarriedBiodatasCount() {
	try {
		return await biodataModel.countDocuments({
			'generalInfo.maritalStatus': 'অবিবাহিত',
		});
	} catch(err) {
		console.log(err);
	}
}

// get total married biodatas count
async function getTotalMarriedBiodatasCount() {
	try {
		return await biodataModel.countDocuments({
			'generalInfo.maritalStatus': 'বিবাহিত',
		});
	} catch(err) {
		console.log(err);
	}
}

// get total divorced biodatas count
async function getTotalDivorcedBiodatasCount() {
	try {
		return await biodataModel.countDocuments({
			'generalInfo.maritalStatus': 'ডিভোর্সড',
		});
	} catch(err) {
		console.log(err);
	}
}

// get total widow biodatas count
async function getTotalWidowBiodatasCount() {
	try {
		return await biodataModel.countDocuments({
			'generalInfo.maritalStatus': 'বিধবা',
		});
	} catch(err) {
		console.log(err);
	}
}

// get total widower biodatas count
async function getTotalWidowerBiodatasCount() {
	try {
		return await biodataModel.countDocuments({
			'generalInfo.maritalStatus': 'বিপত্নীক',
		});
	} catch(err) {
		console.log(err);
	}
}

// get total biodatas
async function getTotalBiodatas() {
  try {return await biodataModel.find({}).sort({ date: 1 });
	}catch(err) {
    console.log(err);
  }
}

// get unapproved biodatas
async function getAllUnApprovedBiodatas() {
	try {
		return await biodataModel
			.find({
				isApproved: false,
			})
			.sort({ date: 1 });
	} catch (err) {
		console.log(err);
	}
}

// get unapproved biodatas
async function getAllUnApprovedBiodatasWithPagination(skip, limit) {
	console.log(skip, limit);
	try {
		return await biodataModel
			.find({
				isApproved: false,
			})
			.skip(skip)
			.limit(limit)
			.sort({ date: 1 });
	} catch (err) {
		console.log(err);
	}
}

module.exports = {
	saveBiodata,
	getSingleBiodata,
	deleteSingleBiodata,
	getTotalCountOfBiodata,
	getTotalMaleCountOfBiodata,
	getTotalFemaleCountOfBiodata,
	getBiodatasUploadedThisWeekCount,
	getBiodatasUploadedIn15DaysCount,
	getBiodatasUploadedInMonthCount,
	getBiodatasUploadedInYearCount,
	getTotalUnmarriedBiodatasCount,
	getTotalMarriedBiodatasCount,
	getTotalDivorcedBiodatasCount,
	getTotalWidowBiodatasCount,
	getTotalWidowerBiodatasCount,
	getAllUnApprovedBiodatas,
	getAllUnApprovedBiodatasWithPagination,
};
