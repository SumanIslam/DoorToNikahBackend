const express = require('express');
const {
	SingleBiodataGET,
	deleteBiodataGET,
	countBiodataGET,
	BiodatasGET,
	BiodatasWithPaginationGET,
	countBiodatasUploadedThisWeekGET,
	countBiodatasUploadedIn15DaysGET,
	countBiodatasUploadedInaMonthGET,
	countBiodatasUploadedInaYearGET,
} = require('../controllers/biodata.controller');

const biodataRouter = express.Router();


biodataRouter.get('/biodatas', BiodatasGET);
biodataRouter.get('/biodatasWithPagination', BiodatasWithPaginationGET);
biodataRouter.get('/biodatas/biodata', SingleBiodataGET);
biodataRouter.delete('/biodatas/biodata/delete', deleteBiodataGET);
biodataRouter.get('/biodatas/count', countBiodataGET);
biodataRouter.get('/biodatas/this-week', countBiodatasUploadedThisWeekGET);
biodataRouter.get('/biodatas/15days', countBiodatasUploadedIn15DaysGET);
biodataRouter.get('/biodatas/this-month', countBiodatasUploadedInaMonthGET);
biodataRouter.get('/biodatas/this-year', countBiodatasUploadedInaYearGET);

module.exports = biodataRouter;
