// import Product and Category:
import Product from "./product.js";
import Category from "./category.js";
import Cart from "./cart.js";
import Order from "./order.js";

// Make new product to products:
const laptop = new Product(
  4342,
  "Laptop",
  400,
  "Powerful laptop for all your needs"
);
const oppo5 = new Product(
  1254,
  "oppo5",
  50,
  "Powerful smarphone for all your needs"
);

// Make new category, electronics, in Category():
const electronics = new Category(5, "Electronics");
const computers = new Category(123, "Computers");

// Display info of product (ex: laptop):
laptop.displayInfo();

// Update info of product:
laptop.updateProduct(
  2353,
  "Laptop",
  500,
  "Powerfulll laptop for all your needs"
);
laptop.displayInfo();

// Display info of Category (ex: electronics):
electronics.displayInfo();

// update/subtitution the product to category:
electronics.updateCategory(laptop);
electronics.updateCategory(oppo5);
// implement updating a product to many category:
computers.updateCategory(laptop);

// show products from category, electronics:
electronics.Products();
computers.Products();

// implement cart => make new cart id:
const cart1 = new Cart(1);

// add item like laptop and oppo5. addItem(product, countItem).
cart1.addItem(laptop, 1);
cart1.addItem(oppo5, 2);
cart1.addItem(laptop, 1);
cart1.addItem(oppo5, 2);

// view items in cart
cart1.viewCart();

// implement new Order:
const order1 = new Order(1);
order1.createOrder(cart1);

// Display Order Detail:
order1.displayOrderDetails();
