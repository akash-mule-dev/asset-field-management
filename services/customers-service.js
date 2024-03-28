const { Addresses } = require('../models');

class CustomersService {
  constructor(customersRepository) {
    console.log('Customers Repository Class Created');
    this.customersRepository = customersRepository;
  }

  /**
   * A function to asynchronously retrieve all customers.
   *
   * @return {Promise} A Promise that resolves to the collection of customers.
   */
  async getAllCustomers() {
    console.log('CustomersRepository : Fetching customers CRUD Repo');
    const customersCollection = await this.customersRepository.getAll({
      include: { model: Addresses, as: 'customerAddresses' },
    });
    return customersCollection;
  }

  /**
   * Retrieves a customer by their ID.
   *
   * @param {number} id - The ID of the customer.
   * @return {Promise} A promise that resolves to the customer object.
   */
  async getCustomerById(req) {
    const id = req.params.id;
    const customerDetails = await this.customersRepository.get(id);
    const customerAddresses = await customerDetails.getCustomerAddresses();
    customerDetails.setDataValue('customerAddresses', customerAddresses);
    return customerDetails;
  }

  async createCustomer(req) {
    const customerDetailsToBeCreated = req.body;
    console.log('customerDetailsToBeCreated', customerDetailsToBeCreated);
    const customerDetails = await this.customersRepository.create(customerDetailsToBeCreated);
    const customerAddresses = await customerDetails.getCustomerAddresses();
    customerDetails.setDataValue('customerAddresses', customerAddresses);
    return customerDetails;
  }
}

module.exports = CustomersService;
