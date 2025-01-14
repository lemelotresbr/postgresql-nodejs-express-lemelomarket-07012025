const ProductRepository = require('../repositories/ProductRepository');

class ProductService {
    static async createProduct(product) {
        await ProductRepository.addProduct(product);
    }
}

module.exports = ProductService;