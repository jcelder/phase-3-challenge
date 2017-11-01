COPY products (name, price, section) FROM '/Users/josh/dev/phase2/phase-3-challenge/part-2/db/grocery.csv' WITH (FORMAT csv, HEADER true);

INSERT INTO shoppers (shopper_name) VALUES
  ('Josh'),
  ('Jon'),
  ('Vincenzo'),
  ('Corey'),
  ('Joe');


INSERT INTO orders (shopper_id) VALUES
  ('1'),
  ('3'),
  ('4'),
  ('1'),
  ('2'),
  ('5');


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
