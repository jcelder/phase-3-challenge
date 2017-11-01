const { db, pgp } = require('./db_connection.js')

/**
 * Lists all products from a section
 * @param {string} section - section you want to look up
 * @returns {Promise} - When section is found, it resolves with the array of rows
 * When no section is found, it resolves with an empty array.
 */
const listProductsBySection = (section) => {
  return Promise.resolve('Test promise please ignore.')
}
