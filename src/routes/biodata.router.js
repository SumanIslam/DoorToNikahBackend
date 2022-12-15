const express = require('express');
const {
	SingleBiodataGET,
	deleteBiodataGET,
	countBiodataGET,
	BiodatasGET,
	BiodatasWithPaginationGET,
} = require('../controllers/biodata.controller');

const biodataRouter = express.Router();


biodataRouter.get('/biodatas', BiodatasGET);
biodataRouter.get('/biodatasWithPagination', BiodatasWithPaginationGET);
biodataRouter.get('/biodatas/biodata', SingleBiodataGET);
biodataRouter.delete('/biodatas/biodata/delete', deleteBiodataGET);
biodataRouter.get('/biodatas/count', countBiodataGET);

module.exports = biodataRouter;
