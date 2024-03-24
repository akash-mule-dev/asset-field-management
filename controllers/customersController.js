const CustomersRepository = require('../repository/customers-repository');
const { commonUtil } = require('../utils');

const customersRepository = new CustomersRepository();

async function getAllCustomers(req, res) {
  try {
    const customersColleciton = await customersRepository.getAllCustomers();
    const response = commonUtil.updateSuccessObject(res, customersColleciton);
    return response;
  } catch (error) {
    const response = commonUtil.updateErrorObject(res, error);
    return response;
  }
}

module.exports = {
  getAllCustomers,
};
