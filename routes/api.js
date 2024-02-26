const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    res.send('This is for API Routes!')
})

module.exports = route