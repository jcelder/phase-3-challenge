const { db, pgp } = require('./db_connection.js')

/**
 * Lists all products from a section
 * @param {string} section - section you want to look up
 * @returns {Promise} - When section is found, it resolves with the array of rows
 * When no section is found, it resolves with an empty array.
 */
const listProductsBySection = (section) => {
  return db.any('SELECT name AS "Product Name", section AS "Section" FROM products WHERE section=$1', [section])
}

module.exports = { listProductsBySection }
