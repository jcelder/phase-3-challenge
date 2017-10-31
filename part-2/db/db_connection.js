const pgp = require('pg-promise')()

const connection = process.env.NODE_ENV === 'test'
  ? 'postgres:///grocery_test'
  : 'postgres:///grocery'

const db = pgp(connection)

module.exports = { db, pgp }
