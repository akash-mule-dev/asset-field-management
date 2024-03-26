const ProductsRepository = require('../repository/products-repository');
const { commonUtil } = require('../utils');
const { ProductsService } = require('../services');
const productsService = new ProductsService(new ProductsRepository());

async function getAllProducts(req, res) {
  try {
    const productsColleciton = await productsService.getAllProducts();
    return commonUtil.updateSuccessObject(res, productsColleciton);
  } catch (error) {
    return commonUtil.updateErrorObject(res, error);
  }
}

module.exports = {
  getAllProducts,
};
