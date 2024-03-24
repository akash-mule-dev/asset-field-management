const express = require('express');
const router = express.Router();
const customersController = require('../../controllers/customersController');

router.get('/', customersController.getAllCustomers);
// router.post('/', customersController.createStore);
// router.get('/:id', customersController.getStoreById);
// router.put('/:id', customersController.updateStore);
// router.delete('/:id', customersController.deleteStore);
module.exports = router;
