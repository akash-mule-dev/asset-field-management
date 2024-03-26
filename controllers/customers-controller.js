const CustomersRepository = require('../repository/customers-repository');

const { CustomersService } = require('../services/index');
const { commonUtil } = require('../utils');

const customersService = new CustomersService(new CustomersRepository());

/**
 * Retrieves all customers from the customers repository.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<Object>} - A promise that resolves to the updated success object or error object.
 */
async function getAllCustomers(req, res) {
  try {
    const customersColleciton = await customersService.getAllCustomers();
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
  try {
    const customerDetails = await customersService.getCustomerById(req);
    return commonUtil.updateSuccessObject(res, customerDetails);
  } catch (error) {
    console.log(error);
    return commonUtil.updateErrorObject(res, error);
  }
}

module.exports = {
  getAllCustomers,
  getCustomerById,
};
