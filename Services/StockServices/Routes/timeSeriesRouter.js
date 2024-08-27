const express = require("express");
const { getHistoricalData } = require("../Controllers/timeSeriesController");

const router = express.Router();

router.get('/getData/:symbolName' , getHistoricalData)

module.exports = router