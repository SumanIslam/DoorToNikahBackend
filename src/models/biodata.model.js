const biodataModel = require('../mongoose/biodata.mongo');
const { daysInThisMonth, daysInYear } = require('../services/dates');

// save single biodata to db
async function saveBiodata(newBiodata) {
  try {
    const biodata = await biodataModel.findOneAndUpdate({
      biodataId: newBiodata.biodataId
    }, newBiodata, {
      upsert: true
    });
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
async function getBiodatasUploadedThisWeek() {
  try {
		// Get today's date using the JavaScript Date object.
		let ourDate = new Date();

		// Change it so that it is 7 days in the past.
		let pastDate = ourDate.getDate() - 7;
		ourDate.setDate(pastDate);

		return await biodataModel.find({ date: { $gt: ourDate, $lt: Date.now() } });
	}catch(err) {
    console.log(err);
  }
}

// get biodatas uploaded in 15 days from now
async function getBiodatasUploadedIn15Days() {
  try {
		// Get today's date using the JavaScript Date object.
		let ourDate = new Date();

		// Change it so that it is 7 days in the past.
		let pastDate = ourDate.getDate() - 15;
		ourDate.setDate(pastDate);

		return await biodataModel.find({ date: { $gt: ourDate, $lt: Date.now() } });
	}catch(err) {
    console.log(err);
  }
}

// get biodatas uploaded in a month from now
async function getBiodatasUploadedInMonth() {
  try {
		// Get today's date using the JavaScript Date object.
		let ourDate = new Date();

    // Get number of days in this month
    let numberOfDaysInThisMonth = daysInThisMonth();

		// Change it so that it is 7 days in the past.
		let pastDate = ourDate.getDate() - numberOfDaysInThisMonth;
		ourDate.setDate(pastDate);

		return await biodataModel.find({ date: { $gt: ourDate, $lt: Date.now() } });
	}catch(err) {
    console.log(err);
  }
}

// get biodatas uploaded in a year from now
async function getBiodatasUploadedInYear() {
  try {
		// Get today's date using the JavaScript Date object.
		let ourDate = new Date();

    // Get number of days in this year
    let numberOfDaysInThisYear = daysInYear(ourDate.getFullYear);

		// Change it so that it is 7 days in the past.
		let pastDate = ourDate.getDate() - numberOfDaysInThisYear;
		ourDate.setDate(pastDate);

		return await biodataModel.find({ date: { $gt: ourDate, $lt: Date.now() } });
	}catch(err) {
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
	getBiodatasUploadedThisWeek,
	getBiodatasUploadedIn15Days,
	getBiodatasUploadedInMonth,
	getBiodatasUploadedInYear,
};