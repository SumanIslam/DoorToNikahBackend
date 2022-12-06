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
async function updateBiodata(newBiodata) {
  try {
    const biodata = await biodataModel.create(newBiodata);
    return biodata;
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  saveBiodata,
}