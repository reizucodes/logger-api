const express = require('express')
const route = express.Router()

route.get('/' , (req, res) => {
    res.status(200).json({
        'type' : 'Success',
        'message' : 'Welcome to Logger-API! Start Documenting!'
    })
})

route.get('/web', (req, res) => {
    res.send('This is for Web Routes!')
})

module.exports = route