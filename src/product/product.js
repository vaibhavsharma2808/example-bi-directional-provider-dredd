class Product {
    constructor(id, type, name, version, price, description, dimensions) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.version = version;
        this.price = price;
        this.description = description;
        this.dimensions = dimensions;
    }
}

module.exports = Product;