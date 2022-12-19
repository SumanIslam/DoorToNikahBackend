const express = require('express');
const { daysInYear } = require('../services/dates');
const biodataModel =  require('../mongoose/biodata.mongo');
const {
	SingleBiodataGET,
	deleteBiodataGET,
	countBiodataGET,
	BiodatasGET,
	BiodatasWithPaginationGET,
	totalUnApproveBiodatasGET,
	totalUnApproveBiodatasWithPaginationGET,
	acceptedBiodataPOST,
	approvedBiodatasGET,
	approvedBiodatasWithPaginationGET,
} = require('../controllers/biodata.controller');

const biodataRouter = express.Router();


biodataRouter.get('/biodatas', BiodatasGET);
biodataRouter.get('/approved-biodatas', approvedBiodatasGET);
biodataRouter.get('/biodatasWithPagination', BiodatasWithPaginationGET);
biodataRouter.get('/approved-biodatasWithPagination', approvedBiodatasWithPaginationGET);
biodataRouter.get('/biodatas/biodata', SingleBiodataGET);
biodataRouter.delete('/biodatas/biodata/delete', deleteBiodataGET);
biodataRouter.get('/biodatas/count', countBiodataGET);
biodataRouter.get('/biodatas/unapproved-biodatas', totalUnApproveBiodatasGET);
biodataRouter.get(
	'/biodatas/unapproved-biodatas-pagination',
	totalUnApproveBiodatasWithPaginationGET
);
biodataRouter.post(
	'/biodatas/accepted', acceptedBiodataPOST
);

module.exports = biodataRouter;
