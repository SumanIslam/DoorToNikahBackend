const mongoose = require('mongoose');

const biodataSchema = new mongoose.Schema({
	candidatesName: {
		name: {
			type: String,
			required: true,
		},
	},
	generalInfo: {
		biodataType: {
			type: String,
			required: true,
		},
		maritalStatus: {
			type: String,
			required: true,
		},
		permanentDivision: {
			type: String,
			required: true,
		},
		permanentDistrict: {
			type: String,
			required: true,
		},
		presentDivision: {
			type: String,
			required: true,
		},
		presentDistrict: {
			type: String,
			required: true,
		},
		birthYear: {
			value: {
				type: Number,
				required: true,
			},
			option: {
				type: String,
				required: true,
			},
		},
		skinColor: {
			type: String,
			required: true,
		},
		height: {
			type: String,
			required: true,
		},
		weight: {
			type: String,
			required: true,
		},
		bloodGroup: {
			type: String,
			required: true,
		},
		occupation: {
			type: String,
			required: true,
		},
		monthlyIncome: {
			type: String,
		},
	},
	address: {
		permanentAddress: {
			type: String,
			required: true,
		},
		presentAddress: {
			type: String,
			required: true,
		},
		broughtUpPlace: {
			type: String,
			required: true,
		},
	},
	educationalQualification: {
		mediumOfStudy: {
			type: String,
			required: true,
		},
		otherEducationalInfo: {
			type: String,
		},
	},
	familyInfo: {
		fathersName: {
			type: String,
			required: true,
		},
		mothersName: {
			type: String,
			required: true,
		},
		fathersOccupation: {
			type: String,
			required: true,
		},
		mothersOccupation: {
			type: String,
			required: true,
		},
		numberOfBrothers: {
			type: String,
			required: true,
		},
		numberOfSisters: {
			type: String,
			required: true,
		},
		unclesOccupation: {
			type: String,
		},
		financialAndSocialCondition: {
			type: String,
			required: true,
		},
	},
	personalInfo: {
		dailyPrayer: {
			type: String,
			required: true,
		},
		prayingSince: {
			type: String,
			required: true,
		},
		MaintainMahram: {
			type: String,
			required: true,
		},
		QuranRecitation: {
			type: String,
			required: true,
		},
		majhab: {
			type: String,
			required: true,
		},
		politicalViews: {
			type: String,
			required: true,
		},
		watchFilm: {
			type: String,
		},
		mentalProblem: {
			type: String,
			required: true,
		},
		deeniMehnot: {
			type: String,
			required: true,
		},
		pirMuridan: {
			type: String,
			required: true,
		},
		beliefsAboutMazar: {
			type: String,
			required: true,
		},
		favoriteIslamicBooks: {
			type: String,
			required: true,
		},
		favoriteIslamicScholar: {
			type: String,
			required: true,
		},
		specialSkills: {
			type: String,
		},
		aboutYourself: {
			type: String,
			required: true,
		},
	},
	marriageInfo: {
		parentsConsent: {
			type: String,
			required: true,
		},
		reasonOfMarriage: {
			type: String,
			required: true,
		},
	},
	otherInfo: {
		termsToInclude: {
			type: String,
		},
	},
	partnersCharacteristics: {
		partnersAge: {
			type: String,
			required: true,
		},
		partnersSkinColor: {
			type: String,
			required: true,
		},
		partnersMinimumHeight: {
			type: String,
			required: true,
		},
		partnersMinimumEducationalQualification: {
			type: String,
			required: true,
		},
		partnersDistrict: {
			type: String,
			required: true,
		},
		partnersMaritalStatus: {
			type: String,
			required: true,
		},
		partnersOccupation: {
			type: String,
		},
		partnersFinancialCondition: {
			type: String,
			required: true,
		},
		partnersFamilyCondition: {
			type: String,
			required: true,
		},
		partnersDesirableCharacteristics: {
			type: String,
			required: true,
		},
	},
	authoritysAsk: {
		parentsConsentAboutBiodata: {
			type: String,
			required: true,
		},
		isGivenInfoLegitimate: {
			type: String,
			required: true,
		},
		takeResponsibilityOfFalseInfo: {
			type: String,
			required: true,
		},
	},
	contactInfo: {
		guardiansPhoneNumber: {
			type: String,
			required: true,
		},
		relationWithGuardian: {
			type: String,
			required: true,
		},
		EmailForResponse: {
			type: String,
			required: true,
		},
		candidatesPhoneNumber: {
			type: String,
			required: true,
		},
	},
	biodataId: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const biodataModel = mongoose.model('Biodata', biodataSchema);

module.exports = biodataModel;