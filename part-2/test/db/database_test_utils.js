const { db, pgp } = require('../../db/db_connection')

/**
 * Truncates all tables in the database
 * @returns {Promise} - Promise whose resolution is irrelevant
 */
const resetDB = () => {
  return db.any('TRUNCATE TABLE products, shoppers, orders, order_items RESTART IDENTITY')
}

/**
 * Seeds shoppers tables in the test database
 * @returns {Promise} - Promise whose resolution is irrelevant
 */
const seedShoppers = () => {
  return db.any(`INSERT INTO shoppers (shopper_name) VALUES
    ('Josh'),
    ('Jon'),
    ('Vincenzo')`)
}

/**
 * Seeds products table in the test database
 * @returns {Promise} - Promise whose resolution is irrelevant
 */
const seedProducts = () => {
  return db.any(`INSERT INTO products (name, price, section) VALUES
  ('Milk', '5.99', 'Dairy'),
  ('Butter', '3.99', 'Dairy'),
  ('Cheddar Cheese', '6.99', 'Dairy'),
  ('Onions', '1.29', 'Produce'),
  ('Garlic', '1.39', 'Produce'),
  ('Chicken Breast', '4.29', 'Meat')`)
}

/**
 * Seeds orders table in the test database
 * @returns {Promise} - Promise whose resolution is irrelevant
 */
const seedOrders = () => {
  return db.any(`INSERT INTO orders (shopper_id) VALUES
  ('1'),
  ('2'),
  ('1')`)
}

/**
 * Seeds order_items join table in the test database
 * @returns {Promise} - Promise whose resolution is irrelevant
 */
const seedOrderItems = () => {
  return db.any(`INSERT INTO order_items (order_id, product_id) VALUES
  ('1', '2'),
  ('2', '4'),
  ('3', '1'),
  ('3', '3')`)
}

/**
 * Seeds all tables in database
 * @returns {Promise} - Promise whose resolution is irrelevant
 */
const seedDB = () => {
  return seedShoppers()
    .then(seedProducts)
    .then(seedOrders)
    .then(seedOrderItems)
}

/**
 * Resets then seeds the database
 * @returns {Promise} - Promise whose resolutions is irrelevant
 */
const initDB = () => {
  return resetDB().then(seedDB)
}

module.exports = { initDB }
