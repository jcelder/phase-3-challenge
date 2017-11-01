CREATE TABLE shoppers(
  shopper_id SERIAL PRIMARY KEY,
  shopper_name TEXT NOT NULL
);

CREATE TABLE products(
  product_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price MONEY NOT NULL,
  section TEXT
);

CREATE TABLE orders(
  order_id SERIAL PRIMARY KEY,
  shopper_id INT REFERENCES shoppers(shopper_id)
);

CREATE TABLE order_items(
  id SERIAL PRIMARY KEY,
  order_id INT REFERENCES orders(order_id),
  product_id INT REFERENCES products(product_id)
);
