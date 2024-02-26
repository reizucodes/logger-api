const json = require('express').json()
const requestLogger = require('./LogRequestMiddleware')

/**
 * Include middleware for app usage
 */
const middleware = {
    json,
    requestLogger
}

module.exports = middleware