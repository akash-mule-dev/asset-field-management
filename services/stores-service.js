const { Stores } = require('../models');
class StoresService {
  constructor() {
    this.Stores = Stores;
  }
  getAllStores() {
    return this.getAll();
  }

  getStoreByStoreId(id) {
    return this.get(id);
  }
}
module.exports = StoresService;
