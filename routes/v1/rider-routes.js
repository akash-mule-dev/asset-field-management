const express = require('express');
const { ridersController } = require('../../controllers');

const router = express.Router();

router.get('/', ridersController.getAllRiders);

module.exports = router;
