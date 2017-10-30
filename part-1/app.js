const app = require('express')()
const bodyParser = require('body-parser')

const { router } = require('./routes/routes.js')

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', router)

app.listen(3000, () => {
  console.log('Application is running on localhost:3000')
})
