// cart.js
class Cart {
  items = [];
  constructor(cartId) {
    this.cartId = cartId;
  }

  addItem(product, quantity) {
    for (let i = 0; i < quantity; i++) {
      this.items.push(product);
    }
  }

  removeItem(product) {
    this.items = this.items.filter((item) => item !== product);
  }

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
