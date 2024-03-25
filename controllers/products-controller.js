const ProductsRepository = require('../repository/products-repository');
const { commonUtil } = require('../utils');

const productsRepository = new ProductsRepository();
async function getAllProducts(req, res) {
  try {
    const productsColleciton = await productsRepository.getAllProducts();
    return commonUtil.updateSuccessObject(res, productsColleciton);
  } catch (error) {
    return commonUtil.updateErrorObject(res, error);
  }
}

module.exports = {
  getAllProducts,
};
