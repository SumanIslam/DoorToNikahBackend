// candidatesName validation
const candidatesNameValidation = (candidatesName) => {
  return candidatesName?.name !== ''
}

// generalInfo validation
const generalInfoValidation = (generalInfo) => {
	return (
		generalInfo?.biodataType !== '' &&
		generalInfo?.maritalStatus !== '' &&
		generalInfo?.permanentDivision !== '' &&
		generalInfo?.permanentDistrict !== '' &&
		generalInfo?.presentDivision !== '' &&
		generalInfo?.presentDistrict !== '' &&
		generalInfo?.birthYear !== {} &&
		generalInfo?.skinColor !== '' &&
		generalInfo?.height !== '' &&
		generalInfo?.weight !== '' &&
		generalInfo?.bloodGroup !== '' &&
		generalInfo?.occupation !== ''
	);
};

// address validation
const addressValidation = (address) => {
	return (
		address?.permanentAddress !== '' &&
		address?.presentAddress !== '' &&
		address?.broughtUpPlace !== ''
	);
};

// educational qualification validation
const educationalQualificationValidation = (educationalQualification) => {
	let validation = educationalQualification?.mediumOfStudy !== '';
	if(educationalQualification?.mediumOfStudy === 'জেনারেল') {
		validation = educationalQualification?.sscOrEquivalentStudy !== '';
		if(educationalQualification?.sscOrEquivalentStudy === 'হ্যাঁ') {
			validation =
				educationalQualification?.sscOrEquivalentResult !== '' &&
				educationalQualification?.sscOrEquivalentDivision !== '' &&
				educationalQualification?.sscOrEquivalentPassingYear !== '' &&
				educationalQualification?.hscOrEquivalentStudy !== '';
				// if passed hsc
				if(educationalQualification?.hscOrEquivalentStudy === 'হ্যাঁ') {
					validation =
						validation &&
						educationalQualification?.hscOrEquivalentResult !== '' &&
						educationalQualification?.hscOrEquivalentDivision !== '' &&
						educationalQualification?.hscOrEquivalentPassingYear !== '';

						if (educationalQualification?.honsOrEquivalentStudy) {
							validation =
								validation &&
								educationalQualification?.honsInstituteName !== '' &&
								educationalQualification?.honsPassingYear !== '';
							return validation;
						}
					
					return validation;
				} else if (educationalQualification?.hscOrEquivalentStudy === 'না') {
					// if didn't pass hsc
					validation =
						validation && educationalQualification?.hscSession !== '';

					return validation;
				} else if(educationalQualification?.hscOrEquivalentStudy === 'ডিপ্লোমা পড়েছি') {
					validation = validation && educationalQualification?.diplomaSubject !== '' &&
					educationalQualification?.diplomaInstituteName !== '' &&
					educationalQualification?.diplomaPassingYear !== '';

					return validation;
				}
			return validation;
		}else if(educationalQualification?.sscOrEquivalentStudy === 'না') {
			validation = educationalQualification?.highestClass !== '';
			return validation;
		}
	} else if (educationalQualification?.mediumOfStudy === 'মাদ্রাসা') {
		validation = educationalQualification?.IsHafez !== '' && educationalQualification?.passDaorayeHadis !== '';
		if(educationalQualification?.passDaorayeHadis === 'হ্যাঁ') {
			validation =
				validation &&
				educationalQualification?.DaorayeHadisPassingYear !== '' &&
				educationalQualification?.DaorayeHadisResult !== '' &&
				educationalQualification?.studyTakhassos !== '';
				if(educationalQualification?.studyTakhassos === 'হ্যাঁ') {
					validation =
						validation &&
						educationalQualification?.takhassosSubject !== '' &&
						educationalQualification?.takhassosPassingYear !== '';
					return validation;
				}
				return validation;
		} else if (educationalQualification?.passDaorayeHadis === 'না, এখনো পড়ছি') {
			validation = validation && educationalQualification?.daorayeHadisYear !== '';
			return validation;
		}
		return validation;
	}
	
};

// familyInfo validation
const familyInfoValidation = (familyInfo) => {
	let validation =
		familyInfo?.fathersName !== '' &&
		familyInfo?.mothersName !== '' &&
		familyInfo?.fathersOccupation !== '' &&
		familyInfo?.mothersOccupation !== '' &&
		familyInfo?.numberOfBrothers !== '' &&
		familyInfo?.numberOfSisters !== '' &&
		familyInfo?.financialAndSocialCondition !== '';
	if(familyInfo?.numberOfBrothers !== '') {
		validation = validation && familyInfo?.brothersInfo !== '';
		return validation;
	}
	if(familyInfo?.numberOfSisters !== '') {
		validation = validation && familyInfo?.sistersInfo !== '';
		return validation;
	}

	return validation;
}

// personalInfo Validation
const personalInfoValidation = (personalInfo, generalInfo) => {
	let validation =
		personalInfo?.dailyPrayer !== '' &&
		personalInfo?.prayingSince !== '' &&
		personalInfo?.MaintainMahram !== '' &&
		personalInfo?.QuranRecitation !== '' &&
		personalInfo?.majhab !== '' &&
		personalInfo?.watchFilm !== '' &&
		personalInfo?.deeniMehnot !== '' &&
		personalInfo?.pirMuridan !== '' &&
		personalInfo?.beliefsAboutMazar !== '' &&
		personalInfo?.favoriteIslamicBooks !== '' &&
		personalInfo?.favoriteIslamicScholar !== '' &&
		personalInfo?.aboutYourself !== '';
	
	// if biodataType is groom
	if (generalInfo?.biodataType === 'পাত্রের বায়োডাটা') {
		validation =
			validation &&
			personalInfo?.haveSunnatiBeard !== '' &&
			personalInfo?.clothesOverAnkle !== '' &&
			personalInfo?.outdoorClothes !== '';
		return validation;
	} else if(generalInfo?.biodataType === 'পাত্রীর বায়োডাটা') {
		validation =
			validation &&
			personalInfo?.outdoorClothes !== '';
		return validation;
	}

	return validation;
}
// marriageInfo Validation
const marriageInfoValidation = (marriageInfo, generalInfo) => {
	let validation =
		marriageInfo?.parentsConsent !== '' &&
		marriageInfo?.reasonOfMarriage !== '';
	// if biodataType is groom
	if (generalInfo?.biodataType === 'পাত্রের বায়োডাটা') {
		validation =
			validation &&
			marriageInfo?.manageWifesParda !== '' &&
			marriageInfo?.allowWifesStudy !== '' &&
			marriageInfo?.allowWifesJob !== '' &&
			marriageInfo?.placeToLiveWithWife !== '' &&
			marriageInfo?.expectDowry !== '';

		return validation;
		
		if (generalInfo?.maritalStatus === 'বিবাহিত') {
			// and his marital status is married
			validation = validation && marriageInfo?.reasonOfMarriageAgain !== '';

			return validation;
		} else if (generalInfo.maritalStatus === 'ডিভোর্সড') {
			// and his marital status is divorced
			validation = validation && marriageInfo?.reasonOfDivorced !== '';

			return validation;
		} else if (generalInfo.maritalStatus === 'বিপত্নীক') {
			// and his marital status is Widower
			validation = validation && marriageInfo?.wifesDeathInfo !== '';
			return validation;
		}
	} else if (generalInfo?.biodataType === 'পাত্রীর বায়োডাটা') {
		validation =
			validation &&
			marriageInfo?.wantToDoJobAfterMarriage !== '' &&
			marriageInfo?.wantToStudyAfterMarriage !== '';
		if (generalInfo?.maritalStatus === 'ডিভোর্সড') {
			// and her marital status is divorced
			validation = validation && marriageInfo?.reasonOfDivorced !== '';

			return validation;
		}
		if (generalInfo?.maritalStatus === 'বিধবা') {
			// and her marital status is divorced
			validation = validation && marriageInfo?.husbandsDeathInfo !== '';

			return validation;
		}
	}

	return validation;
};

// partnersCharacteristics validation
const partnersCharacteristicsValidation = (partnersCharacteristics) => {
	let validation =
		partnersCharacteristics?.partnersAge !== '' &&
		partnersCharacteristics?.partnersSkinColor !== '' &&
		partnersCharacteristics?.partnersMinimumHeight !== '' &&
		partnersCharacteristics?.partnersMinimumEducationalQualification !== '' &&
		partnersCharacteristics?.partnersDistrict !== '' &&
		partnersCharacteristics?.partnersMaritalStatus !== '' &&
		partnersCharacteristics?.partnersOccupation !== '' &&
		partnersCharacteristics?.partnersFinancialCondition !== '' &&
		partnersCharacteristics?.partnersFamilyCondition !== '' &&
		partnersCharacteristics?.partnersDesirableCharacteristics !== '';

	return validation;
}

// authoritysAsk validation
const authoritysAskValidation = (authoritysAsk) => {
	let validation =
		authoritysAsk?.parentsConsentAboutBiodata !== '' &&
		authoritysAsk?.isGivenInfoLegitimate !== '' &&
		authoritysAsk?.takeResponsibilityOfFalseInfo !== '';

	return validation;
};

// contact validation
const contactInfoValidation = (contactInfo) => {
	let validation =
		contactInfo?.guardiansPhoneNumber !== '' &&
		contactInfo?.relationWithGuardian !== '' &&
		contactInfo?.EmailForResponse !== '' &&
		contactInfo?.candidatesPhoneNumber !== '';

	return validation;
};

module.exports = {
	candidatesNameValidation,
	generalInfoValidation,
	addressValidation,
	educationalQualificationValidation,
	familyInfoValidation,
	personalInfoValidation,
	marriageInfoValidation,
	partnersCharacteristicsValidation,
	authoritysAskValidation,
	contactInfoValidation,
};