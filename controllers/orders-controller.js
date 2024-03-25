const OrdersRepository = require('../repository/orders-repository');
const { commonUtil } = require('../utils');
const ordersRepository = new OrdersRepository();
async function getAllOrders(req, res) {
  try {
    const ordersCollection = await ordersRepository.getAllOrders();
    return commonUtil.updateSuccessObject(res, ordersCollection);
  } catch (error) {
    return commonUtil.updateErrorObject(res, error);
  }
}

module.exports = {
  getAllOrders,
};
