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
app.use(bodyParser.json())

app.get('/api/days/:day', (req, res) => {
  const day = req.params.day

  res.set('Content-Type', 'text/plain')

  daysOfWeek[day] === undefined
    ? res.status(400).send(`'${day}' is not a valid day!`)
    : res.status(200).send(`${daysOfWeek[day]}`)
})

app.post('/api/array/concat', (req, res) => {
  const arr1 = req.body.array1
  const arr2 = req.body.array2

  res.set('Content-Type', 'application/json')

  !(Array.isArray(arr1)) || !(Array.isArray(arr2))
    ? res.status(400).json({ error: 'Input data should be of type array' })
    : res.status(200).json({ result: arr1.concat(arr2) })
})

app.listen(3000, () => {
  console.log('Application is running on localhost:3000')
})
