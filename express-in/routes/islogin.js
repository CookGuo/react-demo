var express = require('express');
var router = express.Router();
const userController = require('../controller/user.js')

router.post('/login', userController.login);
router.post('/register', userController.register);
router.post('/islogin', userController.isLogin);
router.post('/islogout', userController.isLogout);

module.exports = router;
