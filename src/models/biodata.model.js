const biodataModel = require('../mongoose/biodata.mongo');

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

async function getSingleBiodata(biodataId) {
  try {
    const biodata = await biodataModel.findOne({biodataId: biodataId})
    return biodata;
  } catch(err) {
    console.log(err);
  }
}

async function deleteSingleBiodata(biodataId) {
  console.log(biodataId);
  try {
    return await biodataModel.findOneAndDelete({biodataId: biodataId});
  } catch(err) {
    console.log(err)
  }
}

module.exports = {
	saveBiodata,
	getSingleBiodata,
	deleteSingleBiodata,
};