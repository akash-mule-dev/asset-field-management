class productsService {
  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }
  getAllProducts() {
    return this.productsRepository.getAllProducts();
  }
}

module.exports = productsService;
