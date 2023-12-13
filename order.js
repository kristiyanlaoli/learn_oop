// order.js
class Order {
  constructor(orderId) {
    this.orderId = orderId;
  }
  items = [];
  totalAmount = 0;

  createOrder(cart) {
    /* Menghitung jumlah dan total harga */
    for (const item of cart.items) {
      const productName = item.productName;
      const price = item.price;

      /* Menambah jumlah dan total harga pada items[] */
      if (this.items[productName]) {
        this.items[productName].quantity++;
        this.items[productName].totalPrice += price;
      } else {
        this.items[productName] = {
          quantity: 1,
          totalPrice: price,
        };
      }

      // Menambah total harga semua produk
      this.totalAmount += price;
    }
  }
  displayOrderDetails() {
    // Menampilkan hasil jumlah dan total harga berdasarkan productName
    console.log(`\nORDER ${this.orderId} DETAIL:`);
    let i = 1;
    for (const productName in this.items) {
      const quantity = this.items[productName].quantity;
      const totalPrice = this.items[productName].totalPrice;

      console.log(
        `${i}. ProductName: ${productName}, Quantity: ${quantity}, Total Price: ${totalPrice}`
      );
      i++;
    }

    // Menampilkan total harga semua produk
    console.log(`Total all products price: ${this.totalAmount}`);
  }
}

export default Order;
