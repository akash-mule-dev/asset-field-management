const OrdersRepository = require('../repository/orders-repository');
const { OrdersService } = require('../services');
const { commonUtil } = require('../utils');
const ordersService = new OrdersService(new OrdersRepository());
async function getAllOrders(req, res) {
  try {
    const ordersCollection = await ordersService.getAllOrders();
    return commonUtil.updateSuccessObject(res, ordersCollection);
  } catch (error) {
    return commonUtil.updateErrorObject(res, error);
  }
}

async function getCustomerOrdersByCustomerId(req, res) {
  try {
    const ordersCollection = await ordersService.getCustomerOrdersByCustomerId(req);
    return commonUtil.updateSuccessObject(res, ordersCollection);
  } catch (error) {
    return commonUtil.updateErrorObject(res, error);
  }
}

async function getStoreOrdersByStoreId(req, res) {
  try {
    const ordersCollection = await ordersService.getStoreOrdersByStoreId(req);
    return commonUtil.updateSuccessObject(res, ordersCollection);
  } catch (error) {
    return commonUtil.updateErrorObject(res, error);
  }
}

module.exports = {
  getAllOrders,
  getCustomerOrdersByCustomerId,
  getStoreOrdersByStoreId,
};
