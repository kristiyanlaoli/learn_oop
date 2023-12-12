// categories.js
class Category {
  constructor(categoryId, categoryName) {
    this.categoryId = categoryId;
    this.categoryName = categoryName;
  }
  products = [];

  displayInfo() {
    console.log(
      `Category Id: ${this.categoryId} \nCategory Name: ${this.categoryName}`
    );
  }

  updateCategory(product) {
    this.products.push(product);
  }

  Products() {
    console.log(`Products in ${this.categoryName}:`);
    for (const product in this.products) {
      console.log(this.products[product].productName);
    }
  }
}

export default Category;
