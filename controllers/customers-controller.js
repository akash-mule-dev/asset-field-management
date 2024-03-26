const { Addresses } = require('../models');
const CustomersRepository = require('../repository/customers-repository');
const { commonUtil } = require('../utils');

const customersRepository = new CustomersRepository();

/**
 * Retrieves all customers from the customers repository.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<Object>} - A promise that resolves to the updated success object or error object.
 */
async function getAllCustomers(req, res) {
  try {
    const customersColleciton = await customersRepository.getAllCustomers({
      include: { model: Addresses, as: 'customerAddresses' },
    });
    return commonUtil.updateSuccessObject(res, customersColleciton);
  } catch (error) {
    return commonUtil.updateErrorObject(res, error);
  }
}

/**
 * Retrieves a customer by their ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<Object>} The customer object or an error object.
 */
async function getCustomerById(req, res) {
  const id = req.params.id;
  try {
    const customer = await customersRepository.getCustomerById(id);
    const customerAddresses = await customer.getCustomerAddresses();
    customer.setDataValue('customerAddresses', customerAddresses);
    return commonUtil.updateSuccessObject(res, customer);
  } catch (error) {
    console.log(error);
    return commonUtil.updateErrorObject(res, error);
  }
}

module.exports = {
  getAllCustomers,
  getCustomerById,
};
