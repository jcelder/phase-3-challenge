const { expect } = require('chai')

const { db, pgp } = require('../db/db_connection.js')
const { initDB } = require('./db/database_test_utils.js')
const
{ listProductsBySection,
    realShoppers } = require('../db/database.js')

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
      expect(results.length).to.equal(3)
    })
  })
})

describe('realShoppers()', () => {
  let realPromise
  beforeEach('reset the database', (done) => {
    realPromise = initDB()
      .then(() => realShoppers())
    done()
  })
  it('Shopper Josh should have 2 orders and be in position 0 of the array', () => {
    return realPromise.then((results) => {
      expect(results[0]['number of orders']).to.equal('2')
    })
  })
  it('Shopper Jon should have 1 order and be in position 1 of the array', () => {
    return realPromise.then((results) => {
      expect(results[1]['number of orders']).to.equal('1')
    })
  })
})

describe('shopperOrders()', () => {
  const id = '1'
  let shopperPromise
  beforeEach('reset the database', (done) => {
    shopperPromise = initDB()
      .then(() => shopperOrders(id))
    done()
  })
  it('should return an array of length 2 when given the shopper ID of 1', () => {
    return shopperPromise.then((results) => {
      console.log(results)
      expect(results.length).to.equal(2)
    })
  })
})
