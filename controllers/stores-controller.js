const StoreService = require('../services/stores-service');

class StoreController {
  static async createStore(req, res) {
    try {
      const store = await StoreService.createStore(req.body);
      return res.status(201).json(store);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create store' });
    }
  }

  static async getStoreById(req, res) {
    try {
      const store = await StoreService.getStoreById(req.params.id);
      if (!store) {
        return res.status(404).json({ error: 'Store not found' });
      }
      return res.status(200).json(store);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch store' });
    }
  }

  static async getAllStores(req, res) {
    try {
      const stores = await StoreService.getAllStores();
      return res.status(200).json(stores);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch stores' });
    }
  }

  static async updateStore(req, res) {
    try {
      const store = await StoreService.updateStore(req.params.id, req.body);
      if (!store) {
        return res.status(404).json({ error: 'Store not found' });
      }
      return res.status(200).json(store);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update store' });
    }
  }

  static async deleteStore(req, res) {
    try {
      const store = await StoreService.deleteStore(req.params.id);
      if (!store) {
        return res.status(404).json({ error: 'Store not found' });
      }
      return res.status(200).json({ message: 'Store deleted successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to delete store' });
    }
  }
}

module.exports = StoreController;
