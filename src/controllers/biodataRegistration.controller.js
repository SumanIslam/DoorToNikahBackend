const registrationPOST = (req, res) => {
	const {
		candidatesName,
		generalInfo,
		address,
		educationalQualification,
		familyInfo,
		personalInfo,
		marriageInfo,
		otherInfo,
		partnersCharacteristics,
		authoritysAsk,
		contactInfo,
		biodataId,
	} = req.body;

	// validation: if biodataType is groom
	if (generalInfo.biodataType === 'পাত্রের বায়োডাটা') {
		const validation1 =
			personalInfo.haveSunnatiBeard !== '' &&
			personalInfo.clothesOverAnkle !== '' &&
			personalInfo.outdoorClothes !== '';

		const validation2 =
			marriageInfo.manageWifesParda !== '' &&
			marriageInfo.allowWifesStudy !== '' &&
			marriageInfo.allowWifesJob !== '' &&
			marriageInfo.placeToLiveWithWife !== '' &&
			marriageInfo.expectDowry !== '';

		// then 'haveSunnatiBeard, wearClothesOverAnkle,typeOfClothes field can't be empty
		if (!validation1) {
			return res.status(400).json({
				msg: 'You did not fill out all the field on "ব্যক্তিগত তথ্য" section',
			});
		}
		// and 'manageWifesParda, allowWifesStudy, allowWifesJob, placeToLiveWithWife, expectDowry' field can't be empty
		if (!validation2) {
			return res.status(400).json({
				msg: 'You did not fill out all the field on "বিয়ে সংক্রান্ত তথ্য" section',
			});
		}

		if (generalInfo.maritalStatus === 'বিবাহিত') {
			// and his marital status is married
			const validation = marriageInfo.reasonOfMarriageAgain !== '';

			// then 'reasonOfMarriageAgain' field can't be empty
			if (!validation) {
				return res.status(400).json({
					msg: 'You did not fill out all the field on "বিয়ে সংক্রান্ত তথ্য" section',
				});
			}
		} else if (generalInfo.maritalStatus === 'ডিভোর্সড') {
			// and his marital status is divorced
			const validation =
				marriageInfo.reasonOfDivorced !== '';

			// then 'reasonOfDivorced' field can't be empty
			if (!validation) {
				return res.status(400).json({
					msg: 'You did not fill out all the field on "বিয়ে সংক্রান্ত তথ্য" section',
				});
			}
		} else if (generalInfo.maritalStatus === 'বিপত্নীক') {
			// and his marital status is Widower
			const validation = marriageInfo.wifesDeathInfo !== '';

			// then 'howYourWifeDied' field can't be empty
			if (!validation) {
				return res.status(400).json({
					msg: 'You did not fill out all the field on "বিয়ে সংক্রান্ত তথ্য" section',
				});
			}
		}
	}

	// validation: if biodataType is bride
  if(generalInfo.biodataType === 'পাত্রীর বায়োডাটা') {
			// and her marital status is single
			const validation1 =
				personalInfo.typeOfClothes !== '';

			const validation2 =
				marriageInfo.wantToDoJobAfterMarriage !== '' &&
				marriageInfo.wantToStudyAfterMarriage !== '';

			// then 'typeOfClothes' field can't be empty
			if (!validation1) {
				return res.status(400).json({
					msg: 'You did not fill out all the field on "ব্যক্তিগত তথ্য" section',
				});
			}
			// and 'wantFreedomForStudy, wantFreedomForJob' field can't be empty
			if (!validation2) {
				return res.status(400).json({
					msg: 'You did not fill out all the field on "বিয়ে সংক্রান্ত তথ্য" section',
				});
			}
    if (generalInfo.maritalStatus === 'ডিভোর্সড') {
			// and her marital status is divorced
			const validation =
				marriageInfo.reasonOfDivorced !== '';

			// then 'reasonOfDivorced' field can't be empty
			if (!validation) {
				return res.status(400).json({
					msg: 'You did not fill out all the field on "বিয়ে সংক্রান্ত তথ্য" section',
				});
			}
		} else if(generalInfo.maritalStatus === 'বিধবা') {
			// and her marital status is Widow
			const validation = marriageInfo.husbandsDeathInfo !== '';

			// then 'husbandsDeathInfo' field can't be empty
			if (!validation) {
				return res.status(400).json({
					msg: 'You did not fill out all the field on "বিয়ে সংক্রান্ত তথ্য" section',
				});
			}
		}
  }
}


module.exports = {
  registrationPOST,
}