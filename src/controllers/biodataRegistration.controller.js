const {
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
} = require('../helper-function/helper-function');

const { saveBiodata } = require('../models/biodata.model');
const biodataModel = require('../mongoose/biodata.mongo')

const registrationPOST = async (req, res) => {
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

	// candidatesName validation
	if(!candidatesNameValidation(candidatesName)) {
		return res.status(400).json({
			msg: 'You did not fill out all the field on "নাম" section',
		});
	}

	// general info validation
	if(!generalInfoValidation(generalInfo)) {
		return res.status(400).json({
			msg: 'You did not fill out all the field on "সাধারণ তথ্য" section',
		});
	}

	// address validation
	if(!addressValidation(address)) {
		return res.status(400).json({
			msg: 'You did not fill out all the field on "ঠিকানা" section',
		});
	}

	// educational qualification validation
	if(!educationalQualificationValidation(educationalQualification)) {
		return res.status(400).json({
			msg: 'You did not fill out all the field on "শিক্ষাগত যোগ্যতা" section',
		});
	}

	// family info validation
	if (!familyInfoValidation(familyInfo)) {
		return res.status(400).json({
			msg: 'You did not fill out all the field on "পারিবারিক তথ্য" section',
		});
	}

	// personal info validation
	if (!personalInfoValidation(personalInfo, generalInfo)) {
		return res.status(400).json({
			msg: 'You did not fill out all the field on "ব্যক্তিগত তথ্য" section',
		});
	}

	// marriage info validation
	if (!marriageInfoValidation(marriageInfo, generalInfo)) {
		return res.status(400).json({
			msg: 'You did not fill out all the field on "বিয়ে সংক্রান্ত তথ্য" section',
		});
	}

	// partners characteristics validation
	if (!partnersCharacteristicsValidation(partnersCharacteristics)) {
		return res.status(400).json({
			msg: 'You did not fill out all the field on "যেমন জীবনসঙ্গী আশা করেন" section',
		});
	}

	// authoritysAsk validation
	if (!authoritysAskValidation(authoritysAsk)) {
		return res.status(400).json({
			msg: 'You did not fill out all the field on "কর্তৃপক্ষের জিজ্ঞাসা" section',
		});
	}

	// contact validation
	if (!contactInfoValidation(contactInfo)) {
		return res.status(400).json({
			msg: 'You did not fill out all the field on "যোগাযোগ" section',
		});
	}

	// save biodata in db
	const biodata = await saveBiodata(req.body);
	return res.status(200).json(biodata)
}

module.exports = {
  registrationPOST,
}