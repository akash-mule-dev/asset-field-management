const express = require('express');
const storesRouter = require('./storeRoutes');
const customerRouter = require('./customerRoutes');

const router = express.Router();

router.use('/stores', storesRouter);
router.use('/customers', customerRouter);

module.exports = router;
