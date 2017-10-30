const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/days/:day', (req, res) => {

})

app.post('/api/array/concat', (req, res) => {
  
})

app.listen(3000, () => {
  console.log('Application is running on localhost:3000')
})
