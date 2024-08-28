const express = require('express');
const ManagerController = require('../../controllers/managers-controller');

const router = express.Router();
router.post('/', ManagerController.createManager);
router.get('/', ManagerController.getAllManagers);
router.get('/:id', ManagerController.getManagerById);
router.put('/:id', ManagerController.updateManager);
router.delete('/:id', ManagerController.deleteManager);

module.exports = router;
