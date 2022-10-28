const Product = require('./product');

class ProductRepository {

    constructor() {
        this.products = new Map([
            ["09", new Product("09", "CREDIT_CARD", "Gem Visa", "v1", 99.99, "text1")],
            ["10", new Product("10", "CREDIT_CARD", "28 Degrees", "v1", 49.49, "text2")],
            ["11", new Product("11", "PERSONAL_LOAN", "MyFlexiPay", "v2", 16.50, "text3")],
        ]);
    }

    async fetchAll() {
        return [...this.products.values()]
    }

    async getById(id) {
        return this.products.get(id);
    }

    async create(product) {
        return this.products.set(product.id, product)
    }
}

module.exports = ProductRepository;
