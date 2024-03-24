const CrudRepository = require('./crud-repository');
const { Customers } = require('../models');

class CustomersRepository extends CrudRepository {
  constructor() {
    console.log('Customers Repository Class Created');
    super(Customers);
  }

  async getAllCustomers() {
    console.log('CustomersRepository : Fetching customers CRUD Repo');
    const customersCollection = await this.getAll();
    return customersCollection;
  }
}

module.exports = CustomersRepository;
