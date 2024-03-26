const { Orders } = require('../models');
const CrudRepository = require('./crud-repository');

class OrdersRepository extends CrudRepository {
  constructor() {
    super(Orders);
    this.Orders = Orders;
  }

  getAllOrders(data) {
    return this.getAll(data);
  }
}
module.exports = OrdersRepository;
