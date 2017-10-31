CREATE TABLE sections(
  section_id SERIAL PRIMARY KEY,
  section_name TEXT NOT NULL UNIQUE
);

CREATE TABLE shoppers(
  shopper_id SERIAL PRIMARY KEY,
  shopper_name TEXT NOT NULL
);

CREATE TABLE products(
  product_id SERIAL PRIMARY KEY,
  product_name TEXT NOT NULL,
  product_price MONEY NOT NULL,
  section_id INT REFERENCES sections(section_id)
);

CREATE TABLE orders(
  order_id SERIAL PRIMARY KEY,
  shopper_id INT REFERENCES shoppers(shopper_id)
);

CREATE TABLE order_items(
  id SERIAL PRIMARY KEY,
  order_id INT REFERENCES orders(order_id),
  product_id INT REFERENCES products(products_id)
);
