const express = require('express');
const {
	SingleBiodataGET,
	deleteBiodataGET,
	countBiodataGET,
	BiodatasGET,
	BiodatasWithPaginationGET,
	biodatasUploadedThisWeekGET,
	biodatasUploadedIn15DaysGET,
	biodatasUploadedInaMonthGET,
	biodatasUploadedInaYearGET,
} = require('../controllers/biodata.controller');

const biodataRouter = express.Router();


biodataRouter.get('/biodatas', BiodatasGET);
biodataRouter.get('/biodatasWithPagination', BiodatasWithPaginationGET);
biodataRouter.get('/biodatas/biodata', SingleBiodataGET);
biodataRouter.delete('/biodatas/biodata/delete', deleteBiodataGET);
biodataRouter.get('/biodatas/count', countBiodataGET);
biodataRouter.get('/biodatas/this-week', biodatasUploadedThisWeekGET);
biodataRouter.get('/biodatas/15days', biodatasUploadedIn15DaysGET);
biodataRouter.get('/biodatas/this-month', biodatasUploadedInaMonthGET);
biodataRouter.get('/biodatas/this-year', biodatasUploadedInaYearGET);

module.exports = biodataRouter;
