const express = require('express');
const router = express.Router();
const indexCont = require('../controller/index')

router.get('/content', indexCont.getIndexInfo);

module.exports = router