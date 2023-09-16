const express = require('express');
var router = express.Router();

const UserController = require('./../controller/userController');

router.get('/',  UserController.registrationPage);
router.post('/createUser', UserController.createUser);

module.exports = router;
