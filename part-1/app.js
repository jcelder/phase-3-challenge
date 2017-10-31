const app = require('express')()
const bodyParser = require('body-parser')

const daysOfWeek = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7,
}

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/days/:day', (req, res) => {
  const day = req.params.day

  res.set('Content-Type', 'text/plain')
  daysOfWeek[day] === undefined
    ? res.status(400).send(`'${day}' is not a valid day!`)
    : res.send(`${daysOfWeek[day]}`)
})

app.post('/api/array/concat', (req, res) => {

})

app.listen(3000, () => {
  console.log('Application is running on localhost:3000')
})
