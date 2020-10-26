const express = require('express');
var app = express();

var router = express.Router();
var user = require('../api/user.js');
router.post('/updatePassword',user.updatePassword);
router.post('/changePassword',user.changePassword);
router.post('/updateUser',user.updateUser);

module.exports = router;