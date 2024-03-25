const CrudRepository = require('./crud-repository');
const { Products } = require('../models');

class productsRepository extends CrudRepository {
  constructor() {
    super(Products);
    this.Products = Products;
  }
  getAllProducts() {
    return this.getAll();
  }
}

module.exports = productsRepository;
