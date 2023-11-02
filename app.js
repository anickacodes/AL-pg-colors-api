// Import express and initialize an instance of the express server
const express = require('express')
const app = express()

//Import cors
const cors = require('cors')
const colorsController = require('./controllers/colorsController')

// Middleware
app.use(cors())
app.use(express.json())

app.use('/colors', colorsController)

app.get('/', (req, res) => {
    res.send('Welcome to Colors App!')
})

module.exports = app