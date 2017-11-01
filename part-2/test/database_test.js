const { expect } = require('chai')

const { db, pgp } = require('../db/db_connection.js')
const { initDB } = require('./db/database_test_utils.js')
const { listProductsBySection } = require('../db/database.js')

describe('listProductsBySection()', () => {
  const section = 'Dairy'
  let listPromise
  beforeEach('reset the database', (done) => {
    listPromise = initDB()
      .then(() => listProductsBySection(section))
    done()
  })
  it('should return an array of length 3 when given the dairy section', () => {
    return listPromise.then((results) => {
      console.log(results)
      expect(results.length).to.equal(3)
    })
  })
})
