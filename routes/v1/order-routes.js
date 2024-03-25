const express = require('express');
const router = express.Router();
const { ordersController } = require('../../controllers');

router.get('/', ordersController.getAllOrders);

module.exports = router;
