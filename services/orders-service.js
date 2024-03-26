const { Orders } = require('../models');

class OrdersService {
  constructor(ordersRepository) {
    this.ordersRepository = ordersRepository;
  }

  getAllOrders(data) {
    return this.ordersRepository.getAll(data);
  }

  async getCustomerOrdersByCustomerId(req, res) {
    const customerId = req.params.id;
    console.log('Customer id :', customerId);
    const ordersCollection = await this.ordersRepository.getAllOrders({
      where: {
        fkCustomerId: customerId,
      },
    });
    return ordersCollection;
  }

  async getStoreOrdersByStoreId(req, res) {
    const storeId = req.params.id;
    console.log('Store id :', storeId);
    const ordersCollection = await this.ordersRepository.getAllOrders({
      where: {
        fkStoreId: storeId,
      },
    });
    return ordersCollection;
  }
}
module.exports = OrdersService;
