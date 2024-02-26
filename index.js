const express = require('express')
const app = express()
const db = require('./app/config/database')
const middleware = require('./app/middleware/middleware')
const route = require('./routes/routes')

Object.values(middleware).forEach(
    mw => app.use(mw)
)

app.use('/' , route);

db.connect.then(() => {
        // throw new Error('Forcing catch block to execute.');
        app.listen(db.port, () => {
            console.log(`Server running on port ${db.port}.`)
            console.log(`Database connection success.`)
        })
    }).catch((error) => {
        console.error([
            `Error occurred.`,
            `Error message: ${error}`,
        ])
        process.exit(1)
    })
