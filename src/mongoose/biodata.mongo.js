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
		sscOrEquivalentStudy: {
			type: String,
		},
		sscOrEquivalentResult: {
			type: String,
		},
		sscOrEquivalentDivision: {
			type: String,
		},
		sscOrEquivalentPassingYear: {
			type: String,
		},
		hscOrEquivalentStudy: {
			type: String,
		},
		hscOrEquivalentResult: {
			type: String,
		},
		hscOrEquivalentDivision: {
			type: String,
		},
		hscOrEquivalentPassingYear: {
			type: String,
		},
		honsOrEquivalentStudy: {
			type: String,
		},
		honsInstituteName: {
			type: String,
		},
		honsPassingYear: {
			type: String,
		},
		hscSession: {
			type: String,
		},
		diplomaSubject: {
			type: String,
		},
		diplomaInstituteName: {
			type: String,
		},
		diplomaPassingYear: {
			type: String,
		},
		highestClass: {
			type: String,
		},
		isHafez: {
			type: String,
		},
		passDaorayeHadis: {
			type: String,
		},
		DaorayeHadisPassingYear: {
			type: String,
		},
		DaorayeHadisResult: {
			type: String,
		},
		studyTakhassos: {
			type: String,
		},
		takhassosSubject: {
			type: String,
		},
		takhassosPassingYear: {
			type: String,
		},
		daorayeHadisYear: {
			type: String,
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
		brothersInfo: {
			type: String,
		},
		sistersInfo: {
			type: String,
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
			required: true,
		},
		mentalOrPhysicalProblem: {
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
		specialSkills: {
			type: String,
		},
		haveSunnatiBeard: {
			type: String,
		},
		clothesOverAnkle: {
			type: String,
		},
		outdoorClothes: {
			type: String,
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
		manageWifesParda: {
			type: String,
		},
		allowWifesStudy: {
			type: String,
		},
		allowWifesJob: {
			type: String,
		},
		placeToLiveWithWife: {
			type: String,
		},
		wantToDoJobAfterMarriage: {
			type: String,
		},
		wantToStudyAfterMarriage: {
			type: String,
		},
		reasonOfMarriageAgain: {
			type: String,
		},
		reasonOfDivorce: {
			type: String,
		},
		wifesDeathInfo: {
			type: String,
		},
		husbandsDeathInfo: {
			type: String,
		},
	},
	otherInfo: {
		termsToInclude: {
			type: String,
		},
		occupationInfo: {
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