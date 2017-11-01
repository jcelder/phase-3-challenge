const { db, pgp } = require('../../db/db_connection')

/**
 * Truncates all tables in the database
 * @returns {Promise} - Promise whose resolution is irrelevant
 */
const resetDB = () => {
  return db.any('TRUNCATE TABLE products, shoppers, orders, order_items RESTART IDENTITY')
}

/**
 * Seeds shoppers tables in the database with the test data
 * @returns {Promise} - Promise whos resolution is irrelevant
 */
const seedShoppers = () => {
  return db.any('INSERT INTO shoppers')
}
