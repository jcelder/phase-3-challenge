const { db, pgp } = require('./db_connection.js')

/**
 * Returns all products from a section
 * @param {string} section - section you want to look up
 * @returns {Promise} - When section is found, it resolves with the array of rows
 * When no section is found, it resolves with an empty array.
 */
const listProductsBySection = (section) => {
  return db.any('SELECT name AS "Product Name", section AS "Section" FROM products WHERE section=$1', [section])
}

/**
 * Returns all shoppers with orders and how many orders they have
 * @returns {Promise} - Promise resolves to array of rows
 */
const realShoppers = () => {
  return db.any(`SELECT shoppers.shopper_name AS "shopper name", COUNT(orders.shopper_id) AS "number of orders"
    FROM orders JOIN shoppers ON (shoppers.shopper_id = orders.shopper_id) GROUP BY shoppers.shopper_name, orders.shopper_id`)
}

const shopperOrders = (id) => {
  return Promise.resolve('Test Promise Please Ignore')
}
module.exports = { listProductsBySection, realShoppers, shopperOrders }
