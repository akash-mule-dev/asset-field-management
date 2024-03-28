const express = require('express');
const router = express.Router();
const { customersController } = require('../../controllers');

router.get('/', customersController.getAllCustomers);
router.post('/', customersController.createCustomer);
router.get('/:id', customersController.getCustomerById);
// router.put('/:id', customersController.updateStore);
// router.delete('/:id', customersController.deleteStore);
module.exports = router;
