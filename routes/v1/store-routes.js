const express = require('express');
const router = express.Router();
const { storesController } = require('../../controllers');
// Route to get all todos

// Route to create a new todo
// router.post('/', storesController.createStore);
// Route to get a todo by ID
router.get('/', storesController.getAllStores);
// Route to update a todo by ID
// router.put('/:id', storesController.updateStore);
// // Route to delete a todo by ID
// router.delete('/:id', storesController.deleteStore);
router.get('/:id', storesController.getStoreById);

module.exports = router;
