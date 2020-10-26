const express = require('express');
var router = express.Router();
var user = require('../api/user.js');

router.post('/register',user.register);
router.post('/verifyEmail',user.verifyEmail);
router.post('/forgotPassword',user.forgotPassword);
router.post('/resendOTP',user.resendOTP);
router.post('/authenticate',user.authenticate);

module.exports = router;
