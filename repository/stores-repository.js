const CrudRepository = require('./crud-repository');
const { Stores } = require('../models');
class StoresRepository extends CrudRepository {
  constructor() {
    super(Stores);
    this.Stores = Stores;
  }
  getAllStores() {
    return this.getAll();
  }

  getStoreByStoreId(id) {
    return this.get(id);
  }
}
module.exports = StoresRepository;
