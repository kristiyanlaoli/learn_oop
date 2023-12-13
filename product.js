// products.js
class Product {
  constructor(productId, productName, price, description) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.description = description;
  }

  /* Menampilkan detail product seperti name, price, dan description*/
  displayInfo() {
    console.log(
      `\nPRODUCT: \nId: ${this.productId} \nName: ${this.productName} \nPrice: ${this.price} \nDescription: ${this.description}`
    );
  }

  // Menambahkan product baru baik dari Id, name, price dan descriptionnya
  updateProduct(productId, productName, price, description) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.description = description;
  }
}

export default Product;
