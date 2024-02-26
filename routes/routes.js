const express = require('express')
const route = express.Router()
const api = require('./api')
const web = require('./web')

/**
 * Define all routes here
 */
route.use('/', web)
route.use('/api', api)

module.exports = route