// cart.js
class Cart {
  items = [];
  constructor(cartId) {
    this.cartId = cartId;
  }

  /* Menambahkan product dan quantitynya
   * dan menambahkan ke array  items[].
   */
  addItem(product, quantity) {
    for (let i = 0; i < quantity; i++) {
      this.items.push(product);
    }
  }

  /* Menghapus product dan quantitynya dari items
   * dengan mencari namanya dengan filter.
   */
  removeItem(product) {
    this.items = this.items.filter((item) => item !== product);
  }

  /* Mau menghitung nama setiap productName ke productCount
   */
  viewCart() {
    const productCount = [];
    for (const item of this.items) {
      const productName = item.productName;
      if (productCount[productName]) {
        productCount[productName]++;
      } else {
        productCount[productName] = 1;
      }
    }
    console.log(`\nTOTAL ITEMS IN CART:`);
    let i = 1;
    for (const productName in productCount) {
      console.log(`${i}. ${productName}: ${productCount[productName]}`);
      i++;
    }
  }
}

export default Cart;
