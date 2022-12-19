const biodataModel = require('../mongoose/biodata.mongo');
async function getApprovedBiodatas(BiodataDetails) {
	const {
		searchingFor,
		maritalStatus,
		mediumOfStudy,
		division,
		district,
		biodataNo,
	} = BiodataDetails;

	if (biodataNo !== '') {
		return await biodataModel.findOne({ 
      biodataId: biodataNo,
      isApproved: true,
    });
	} else if (
		// 1
		searchingFor !== 'সকল বায়োডাটা' &&
		maritalStatus !== 'সকল' &&
		mediumOfStudy !== 'সকল' &&
		division !== 'সকল বিভাগ' &&
		district !== 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.biodataType': searchingFor,
				'generalInfo.maritalStatus': maritalStatus,
				'educationalQualification.mediumOfStudy': mediumOfStudy,
				'generalInfo.permanentDivision': division,
				'generalInfo.permanentDistrict': district,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 2
		searchingFor !== 'সকল বায়োডাটা' &&
		maritalStatus !== 'সকল' &&
		mediumOfStudy !== 'সকল' &&
		division !== 'সকল বিভাগ' &&
		district === 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.biodataType': searchingFor,
				'generalInfo.maritalStatus': maritalStatus,
				'educationalQualification.mediumOfStudy': mediumOfStudy,
				'generalInfo.permanentDivision': division,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 3
		searchingFor !== 'সকল বায়োডাটা' &&
		maritalStatus !== 'সকল' &&
		mediumOfStudy !== 'সকল' &&
		division === 'সকল বিভাগ' &&
		district !== 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.biodataType': searchingFor,
				'generalInfo.maritalStatus': maritalStatus,
				'educationalQualification.mediumOfStudy': mediumOfStudy,
				'generalInfo.permanentDistrict': district,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 4
		searchingFor !== 'সকল বায়োডাটা' &&
		maritalStatus !== 'সকল' &&
		mediumOfStudy !== 'সকল' &&
		division === 'সকল বিভাগ' &&
		district === 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.biodataType': searchingFor,
				'generalInfo.maritalStatus': maritalStatus,
				'educationalQualification.mediumOfStudy': mediumOfStudy,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 5
		searchingFor !== 'সকল বায়োডাটা' &&
		maritalStatus !== 'সকল' &&
		mediumOfStudy === 'সকল' &&
		division !== 'সকল বিভাগ' &&
		district !== 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.biodataType': searchingFor,
				'generalInfo.maritalStatus': maritalStatus,
				'generalInfo.permanentDivision': division,
				'generalInfo.permanentDistrict': district,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 6
		searchingFor !== 'সকল বায়োডাটা' &&
		maritalStatus !== 'সকল' &&
		mediumOfStudy === 'সকল' &&
		division !== 'সকল বিভাগ' &&
		district === 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.biodataType': searchingFor,
				'generalInfo.maritalStatus': maritalStatus,
				'generalInfo.permanentDivision': division,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 7
		searchingFor !== 'সকল বায়োডাটা' &&
		maritalStatus !== 'সকল' &&
		mediumOfStudy === 'সকল' &&
		division === 'সকল বিভাগ' &&
		district !== 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.biodataType': searchingFor,
				'generalInfo.maritalStatus': maritalStatus,
				'generalInfo.permanentDistrict': district,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 8
		searchingFor !== 'সকল বায়োডাটা' &&
		maritalStatus !== 'সকল' &&
		mediumOfStudy === 'সকল' &&
		division === 'সকল বিভাগ' &&
		district === 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.biodataType': searchingFor,
				'generalInfo.maritalStatus': maritalStatus,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 9
		searchingFor !== 'সকল বায়োডাটা' &&
		maritalStatus === 'সকল' &&
		mediumOfStudy !== 'সকল' &&
		division !== 'সকল বিভাগ' &&
		district !== 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.biodataType': searchingFor,
				'educationalQualification.mediumOfStudy': mediumOfStudy,
				'generalInfo.permanentDivision': division,
				'generalInfo.permanentDistrict': district,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 10
		searchingFor !== 'সকল বায়োডাটা' &&
		maritalStatus === 'সকল' &&
		mediumOfStudy !== 'সকল' &&
		division !== 'সকল বিভাগ' &&
		district === 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.biodataType': searchingFor,
				'educationalQualification.mediumOfStudy': mediumOfStudy,
				'generalInfo.permanentDivision': division,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 11
		searchingFor !== 'সকল বায়োডাটা' &&
		maritalStatus === 'সকল' &&
		mediumOfStudy !== 'সকল' &&
		division === 'সকল বিভাগ' &&
		district !== 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.biodataType': searchingFor,
				'educationalQualification.mediumOfStudy': mediumOfStudy,
				'generalInfo.permanentDistrict': district,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 12
		searchingFor !== 'সকল বায়োডাটা' &&
		maritalStatus === 'সকল' &&
		mediumOfStudy !== 'সকল' &&
		division === 'সকল বিভাগ' &&
		district === 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.biodataType': searchingFor,
				'educationalQualification.mediumOfStudy': mediumOfStudy,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 13
		searchingFor !== 'সকল বায়োডাটা' &&
		maritalStatus === 'সকল' &&
		mediumOfStudy === 'সকল' &&
		division !== 'সকল বিভাগ' &&
		district !== 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.biodataType': searchingFor,
				'generalInfo.permanentDivision': division,
				'generalInfo.permanentDistrict': district,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 14
		searchingFor !== 'সকল বায়োডাটা' &&
		maritalStatus === 'সকল' &&
		mediumOfStudy === 'সকল' &&
		division !== 'সকল বিভাগ' &&
		district === 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.biodataType': searchingFor,
				'generalInfo.permanentDivision': division,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 15
		searchingFor !== 'সকল বায়োডাটা' &&
		maritalStatus === 'সকল' &&
		mediumOfStudy === 'সকল' &&
		division === 'সকল বিভাগ' &&
		district !== 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.biodataType': searchingFor,
				'generalInfo.permanentDistrict': district,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 16
		searchingFor !== 'সকল বায়োডাটা' &&
		maritalStatus === 'সকল' &&
		mediumOfStudy === 'সকল' &&
		division === 'সকল বিভাগ' &&
		district === 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.biodataType': searchingFor,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 17
		searchingFor === 'সকল বায়োডাটা' &&
		maritalStatus !== 'সকল' &&
		mediumOfStudy !== 'সকল' &&
		division !== 'সকল বিভাগ' &&
		district !== 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.maritalStatus': maritalStatus,
				'educationalQualification.mediumOfStudy': mediumOfStudy,
				'generalInfo.permanentDivision': division,
				'generalInfo.permanentDistrict': district,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 18
		searchingFor === 'সকল বায়োডাটা' &&
		maritalStatus !== 'সকল' &&
		mediumOfStudy !== 'সকল' &&
		division !== 'সকল বিভাগ' &&
		district === 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.maritalStatus': maritalStatus,
				'educationalQualification.mediumOfStudy': mediumOfStudy,
				'generalInfo.permanentDivision': division,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 19
		searchingFor === 'সকল বায়োডাটা' &&
		maritalStatus !== 'সকল' &&
		mediumOfStudy !== 'সকল' &&
		division === 'সকল বিভাগ' &&
		district !== 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.maritalStatus': maritalStatus,
				'educationalQualification.mediumOfStudy': mediumOfStudy,
				'generalInfo.permanentDistrict': district,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 20
		searchingFor === 'সকল বায়োডাটা' &&
		maritalStatus !== 'সকল' &&
		mediumOfStudy !== 'সকল' &&
		division === 'সকল বিভাগ' &&
		district === 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.maritalStatus': maritalStatus,
				'educationalQualification.mediumOfStudy': mediumOfStudy,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 21
		searchingFor === 'সকল বায়োডাটা' &&
		maritalStatus !== 'সকল' &&
		mediumOfStudy === 'সকল' &&
		division !== 'সকল বিভাগ' &&
		district !== 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.maritalStatus': maritalStatus,
				'generalInfo.permanentDivision': division,
				'generalInfo.permanentDistrict': district,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 22
		searchingFor === 'সকল বায়োডাটা' &&
		maritalStatus !== 'সকল' &&
		mediumOfStudy === 'সকল' &&
		division !== 'সকল বিভাগ' &&
		district === 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.maritalStatus': maritalStatus,
				'generalInfo.permanentDivision': division,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 23
		searchingFor === 'সকল বায়োডাটা' &&
		maritalStatus !== 'সকল' &&
		mediumOfStudy === 'সকল' &&
		division === 'সকল বিভাগ' &&
		district !== 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.maritalStatus': maritalStatus,
				'generalInfo.permanentDistrict': district,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 24
		searchingFor === 'সকল বায়োডাটা' &&
		maritalStatus !== 'সকল' &&
		mediumOfStudy === 'সকল' &&
		division === 'সকল বিভাগ' &&
		district === 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.maritalStatus': maritalStatus,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 25
		searchingFor === 'সকল বায়োডাটা' &&
		maritalStatus === 'সকল' &&
		mediumOfStudy !== 'সকল' &&
		division !== 'সকল বিভাগ' &&
		district !== 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'educationalQualification.mediumOfStudy': mediumOfStudy,
				'generalInfo.permanentDivision': division,
				'generalInfo.permanentDistrict': district,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 26
		searchingFor === 'সকল বায়োডাটা' &&
		maritalStatus === 'সকল' &&
		mediumOfStudy !== 'সকল' &&
		division !== 'সকল বিভাগ' &&
		district === 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'educationalQualification.mediumOfStudy': mediumOfStudy,
				'generalInfo.permanentDivision': division,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 27
		searchingFor === 'সকল বায়োডাটা' &&
		maritalStatus === 'সকল' &&
		mediumOfStudy !== 'সকল' &&
		division === 'সকল বিভাগ' &&
		district !== 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'educationalQualification.mediumOfStudy': mediumOfStudy,
				'generalInfo.permanentDistrict': district,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 28
		searchingFor === 'সকল বায়োডাটা' &&
		maritalStatus === 'সকল' &&
		mediumOfStudy !== 'সকল' &&
		division === 'সকল বিভাগ' &&
		district === 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'educationalQualification.mediumOfStudy': mediumOfStudy,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 29
		searchingFor === 'সকল বায়োডাটা' &&
		maritalStatus === 'সকল' &&
		mediumOfStudy === 'সকল' &&
		division !== 'সকল বিভাগ' &&
		district !== 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.permanentDivision': division,
				'generalInfo.permanentDistrict': district,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 30
		searchingFor === 'সকল বায়োডাটা' &&
		maritalStatus === 'সকল' &&
		mediumOfStudy === 'সকল' &&
		division !== 'সকল বিভাগ' &&
		district === 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.permanentDivision': division,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else if (
		// 31
		searchingFor === 'সকল বায়োডাটা' &&
		maritalStatus === 'সকল' &&
		mediumOfStudy === 'সকল' &&
		division === 'সকল বিভাগ' &&
		district !== 'সকল জেলা'
	) {
		return await biodataModel
			.find({
				'generalInfo.permanentDistrict': district,
				isApproved: true,
			})
			.sort({ biodataId: -1 });
	} else {
		return await biodataModel
			.find({ isApproved: true })
			.sort({ biodataId: -1 });
	}
}

module.exports = {
	getApprovedBiodatas,
};
