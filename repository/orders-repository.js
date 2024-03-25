const { Orders } = require('../models');
const CrudRepository = require('./crud-repository');

class OrdersRepository extends CrudRepository {
  constructor() {
    super(Orders);
    this.Orders = Orders;
  }

  getAllOrders() {
    return this.getAll();
  }

  getOrdersByCustomerId(id) {}
}
module.exports = OrdersRepository;
