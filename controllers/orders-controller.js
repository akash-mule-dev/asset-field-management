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

async function getCustomerOrdersByCustomerId(req, res) {
  try {
    const customerId = req.params.id;
    console.log('Customer id :', customerId);
    const ordersCollection = await ordersRepository.getAllOrders({
      where: {
        fkCustomerId: customerId,
      },
    });
    return commonUtil.updateSuccessObject(res, ordersCollection);
  } catch (error) {
    return commonUtil.updateErrorObject(res, error);
  }
}

async function getStoreOrdersByStoreId(req, res) {
  try {
    const storeId = req.params.id;
    console.log('Store id :', storeId);
    const ordersCollection = await ordersRepository.getAllOrders({
      where: {
        fkStoreId: storeId,
      },
    });
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
