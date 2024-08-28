// services/storeService.js
const { Stores, Addresses } = require('../models');

class StoreService {
  static async createStore(data) {
    const { StoreName, ContactNumber, fkManagerId, address } = data;

    try {
      // Create the store
      const store = await Stores.create({ StoreName, ContactNumber, fkManagerId });

      // Save the store's address
      if (address) {
        const { AddressLine1, AddressLine2, City, PostalCode, Latitude, Longitude, isPrimary } = address;
        let createdAddress = await Addresses.create({
          AddressLine1,
          AddressLine2,
          City,
          PostalCode,
          Latitude,
          Longitude,
          isPrimary,
          fkStoreId: store.StoreId,
        });
        return { store, address: createdAddress };
      }
    } catch (error) {
      console.error('Error creating store:', error);
      throw error;
    }
  }

  static async getStoreById(storeId) {
    try {
      const store = await Stores.findByPk(storeId, {
        include: [{ model: Addresses, as: 'address' }],
      });
      return store;
    } catch (error) {
      console.error('Error fetching store by ID:', error);
      throw error;
    }
  }

  static async getAllStores() {
    try {
      const stores = await Stores.findAll({
        include: [{ model: Addresses, as: 'address' }],
      });
      return stores;
    } catch (error) {
      console.error('Error fetching all stores:', error);
      throw error;
    }
  }

  static async updateStore(storeId, data) {
    const { StoreName, ContactNumber, fkManagerId, address } = data;

    try {
      // Update the store
      const store = await Stores.findByPk(storeId);
      if (!store) {
        throw new Error('Store not found');
      }
      await store.update({ StoreName, ContactNumber, fkManagerId });
      if (address) {
        const { AddressLine1, AddressLine2, City, PostalCode, Latitude, Longitude, isPrimary } = address;
        let storeAddress = await Addresses.findOne({ where: { fkStoreId: storeId } });

        if (storeAddress) {
          let updatedAddress = await storeAddress.update({
            AddressLine1,
            AddressLine2,
            City,
            PostalCode,
            Latitude,
            Longitude,
            isPrimary,
          });
          return { store, address: updatedAddress };
        } else {
          let createdAddress = await Addresses.create({
            AddressLine1,
            AddressLine2,
            City,
            PostalCode,
            Latitude,
            Longitude,
            isPrimary,
            fkStoreId: store.StoreId,
          });
          return { store, address: createdAddress };
        }
      }

      return store;
    } catch (error) {
      console.error('Error updating store:', error);
      throw error;
    }
  }

  static async deleteStore(storeId) {
    try {
      const store = await Stores.findByPk(storeId);
      if (!store) {
        throw new Error('Store not found');
      }
      await store.destroy();
      return store;
    } catch (error) {
      console.error('Error deleting store:', error);
      throw error;
    }
  }
}

module.exports = StoreService;
