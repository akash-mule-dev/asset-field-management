const express = require('express');
const StoreController = require('../../controllers/stores-controller');

const router = express.Router();

router.post('/', StoreController.createStore);
router.get('/:id', StoreController.getStoreById);
router.get('/', StoreController.getAllStores);
router.put('/:id', StoreController.updateStore);
router.delete('/:id', StoreController.deleteStore);

module.exports = router;
