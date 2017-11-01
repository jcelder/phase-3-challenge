const print = require('node-print')

const { pgp } = require('./db/db_connection')
const
  { listProductsBySection,
    realShoppers,
    shopperOrders } = require('./db/database.js')

const command = process.argv[2];
const param = process.argv.slice(3).join(' ')

switch (command) {
  case 'product-list':
    listProductsBySection(param).then((results) => {
      results.length === 0
        ? console.log(
          `USAGE ERROR:
        Section ${param} Does Not Exist
              or
        No Section Entered`)
        : print.pt(results)
    })
    break;
  case 'shopper-orders':
    shopperOrders(param).then((results) => {
      results.length === 0
        ? console.log(
          `USAGE ERROR:
        Shopper ${param} Does Not Exist`)
        : print.pt(results)
    })
    break;
  case 'real-shoppers':
    realShoppers().then((results) => {
      print.pt(results)
    })
    break;
  default:
    console.log(
      `USAGE ERROR:
      No Command Supplied.

      Valid Commands Are:
      product-list <section>
      shopper-orders <id>
      real-shoppers`)
}
pgp.end();
