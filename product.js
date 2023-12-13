// products.js
class Product {
  constructor(productId, productName, price, description) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.description = description;
  }

  displayInfo() {
    console.log(
      `\nPRODUCT: \nId: ${this.productId} \nName: ${this.productName} \nPrice: ${this.price} \nDescription: ${this.description}`
    );
  }

  updateProduct(productId, productName, price, description) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.description = description;
  }
}

export default Product;
