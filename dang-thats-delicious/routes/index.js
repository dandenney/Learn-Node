const express = require('express');
const router = express.Router();
const storeController = require('../store/controller');

// Do work here
router.get('/', storeController.homePage);

module.exports = router;
