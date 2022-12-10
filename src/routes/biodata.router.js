const express = require('express');
const {
	SingleBiodataGET,
	deleteBiodataGET,
} = require('../controllers/biodata.controller');

const biodataRouter = express.Router();


biodataRouter.get('/biodatas/biodata', SingleBiodataGET);
biodataRouter.delete('/biodatas/biodata/delete', deleteBiodataGET);

module.exports = biodataRouter;
