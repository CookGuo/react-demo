const express = require('express');
const router = express.Router();
const headerInfo = require('../controller/header.js');


router.get("/nav", headerInfo.getHeader);

module.exports = router;