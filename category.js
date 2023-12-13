// categories.js
class Category {
  constructor(categoryId, categoryName) {
    this.categoryId = categoryId;
    this.categoryName = categoryName;
  }
  products = [];

  /* Menampilkan id category dan nama category */
  displayInfo() {
    console.log(
      `\nCATEGORY:\nId: ${this.categoryId} \nName: ${this.categoryName}`
    );
  }

  /* Menambahka product ke dalam category tertentu */
  updateCategory(product) {
    this.products.push(product);
  }

  /* Menambahka product-product dari sebuah kategory*/
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
