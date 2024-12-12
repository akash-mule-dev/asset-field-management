const express = require('express');
const router = express.Router();
const { ordersController, storesController } = require('../../controllers');

router.get('/stores/:id', ordersController.getStoreOrdersByStoreId);
router.get('/', ordersController.getAllOrders);
router.get('/customer/:id', ordersController.getCustomerOrdersByCustomerId);

module.exports = router;
