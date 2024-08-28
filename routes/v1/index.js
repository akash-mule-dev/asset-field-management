const express = require('express');
const storesRouter = require('./store-routes');
const customerRouter = require('./customer-routes');
const productsRouter = require('./product-routes');
const ridersRouter = require('./rider-routes');
const ordersRouter = require('./order-routes');
const managersRouter = require('./manager-routes');

const router = express.Router();

router.use('/stores', storesRouter);
router.use('/customers', customerRouter);
router.use('/products', productsRouter);
router.use('/riders', ridersRouter);
router.use('/orders', ordersRouter);
router.use('/managers', managersRouter);

module.exports = router;
