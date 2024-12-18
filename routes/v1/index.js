const express = require('express');
const storesRouter = require('./store-routes');
const customerRouter = require('./customer-routes');
const productsRouter = require('./product-routes');
const ridersRouter = require('./rider-routes');
const ordersRouter = require('./order-routes');

const router = express.Router();

router.use('/products', productsRouter);
router.use('/riders', ridersRouter);
router.use('/orders', ordersRouter);
router.use('/stores', storesRouter);
router.use('/customers', customerRouter);

module.exports = router;
