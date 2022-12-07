const express = require('express');
const { SingleBiodataGET } = require('../controllers/biodata.controller')

const biodataRouter = express.Router();


biodataRouter.get('/biodatas/biodata', SingleBiodataGET);

module.exports = biodataRouter;
