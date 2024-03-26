const CrudRepository = require('./crud-repository');
const { Customers } = require('../models');

class CustomersRepository extends CrudRepository {
  constructor() {
    console.log('Customers Repository Class Created');
    super(Customers);
  }

  /**
   * A function to asynchronously retrieve all customers.
   *
   * @return {Promise} A Promise that resolves to the collection of customers.
   */
  async getAllCustomers(data) {
    console.log('CustomersRepository : Fetching customers CRUD Repo');
    const customersCollection = await this.getAll(data);
    return customersCollection;
  }

  /**
   * Retrieves a customer by their ID.
   *
   * @param {number} id - The ID of the customer.
   * @return {Promise} A promise that resolves to the customer object.
   */
  async getCustomerById(id) {
    return await this.get(id);
  }
}

module.exports = CustomersRepository;
