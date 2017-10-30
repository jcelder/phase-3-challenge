const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3000, () => {
  console.log('Application is running on localhost:3000')
})
