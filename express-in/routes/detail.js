const express = require('express');
const router = express.Router();
const DetailInfo = require("../controller/detail");

router.get('/content', DetailInfo.getDetail);

module.exports = router;