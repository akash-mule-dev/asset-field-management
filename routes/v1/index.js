const express = require('express');
const storesRouter = require('./storeRoutes');

const router = express.Router();

router.use('/stores', storesRouter);

module.exports = router;
