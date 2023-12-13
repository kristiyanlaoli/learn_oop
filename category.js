// categories.js
class Category {
  constructor(categoryId, categoryName) {
    this.categoryId = categoryId;
    this.categoryName = categoryName;
  }
  products = [];

  displayInfo() {
    console.log(
      `\nCATEGORY:\nId: ${this.categoryId} \nName: ${this.categoryName}`
    );
  }

  updateCategory(product) {
    this.products.push(product);
  }

  Products() {
    console.log(`\nPRODUCTS IN ${this.categoryName}:`);
    let i = 1;
    for (const product in this.products) {
      console.log(`${i}. ${this.products[product].productName}`);
      i++;
    }
  }
}

export default Category;
