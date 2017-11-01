-- Sections
INSERT INTO sections (section_name) VALUES
  ('Dairy'),
  ('Produce'),
  ('Meat'),
  ('Bakery'),
  ('Frozen');

-- Shoppers
INSERT INTO shoppers (shopper_name) VALUES
  ('Josh'),
  ('Jon'),
  ('Vincenzo'),
  ('Corey'),
  ('Joe');

-- Products (Dairy)
INSERT INTO products (product_name, product_price, section_id) VALUES
  ('Milk', '3.99', '1'),
  ('Butter', '2.99', '1'),
  ('Cheddar Cheese', '4.99', '1'),
  ('Cream Cheese', '3.49', '1'),
  ('Yogurt', '1.49', '1');

-- Products (Produce)
INSERT INTO products (product_name, product_price, section_id) VALUES
  ('Carrot', '0.99', '2'),
  ('Onion', '0.79', '2'),
  ('Potato', '0.89', '2'),
  ('Broccoli', '0.69', '2'),
  ('Garlic', '0.89', '2');

-- Products (Meat)
INSERT INTO products (product_name, product_price, section_id) VALUES
  ('Chicken', '6.99', '3'),
  ('Ground Beef', '4.99', '3'),
  ('Bacon', '3.49', '3'),
  ('Ground Turkey', '5.99', '3'),
  ('Beef Sirloin', '9.99', '3');

-- Products (Bakery)
INSERT INTO products (product_name, product_price, section_id) VALUES
  ('French Rolls(12)', '4.99', '4'),
  ('White Bread', '2.99', '4'),
  ('Whole Wheat Bread', '3.99', '4'),
  ('Sourdough Loaf', '5.99', '4'),
  ('Hot Dog Buns(24)', '4.49', '4');

-- Products (Frozen)
INSERT INTO products (product_name, product_price, section_id) VALUES
  ('Cheese Pizza', '7.99', '5'),
  ('Pepperoni Pizza', '8.49', '5'),
  ('Vegetable Stir-Fry', '8.99', '5'),
  ('Orange Chicken', '11.99', '5'),
  ('Chicken Tenders', '8.99', '5');

-- orders
INSERT INTO orders (shopper_id) VALUES
  ('1'),
  ('3'),
  ('4'),
  ('1'),
  ('2'),
  ('5');

-- order_items
INSERT INTO order_items (order_id, product_id) VALUES
  ('1', '1'),
  ('1', '24'),
  ('1', '17'),
  ('2', '4'),
  ('3', '14'),
  ('4', '11'),
  ('4', '15'),
  ('5', '12'),
  ('6', '3');
