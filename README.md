# Belajar OOP: Sistem E-commerce

Sistem e-commerce sederhana dengan prinsip Pemrograman Berorientasi Objek OOP dalam JavaScript.

# Cara menggunakan

## Make new product:

```js
const "new product name" = new Product(
  "id",
  "product name",
  "product price",
  "product description"
);
```

## Display info of a product:

```js
"name product".displayInfo();
```

## Update info of product:

```js
"name product".updateProduct(
  "updated id",
  "updated product name",
  "updated product price",
  "updated product description"
);
```

## Make new category:

```js
const "name category" = new Category("id category", "name category");
```

## Display info of Category:

```js
"name category".displayInfo();
```

## Update/subtitution the product to category:

```js
"name category".updateCategory("product");
```

## Show products from a category:

```js
"name category".Products();
```

## Implement cart => make new cart:

```js
const "name cart" = new Cart("cart id");
```

## Add product to cart:

```js
"cart name".addItem("product", "quantity");
```

## View items in cart:

```js
"cart name".viewCart();
```

## Make new Order:

```js
const "name order" = new Order("id order");
```

```js
"name order".createOrder("cart that be ordered");
```

## Display Order Detail:

```js
"name order".displayOrderDetails();
```

## EXAMPLE

For example, you can see on index.js
