const mongoose = require('mongoose')
const config = require('./config')
const env = config.env
const PORT = env.PORT || 3001
const node_env = env.NODE_ENV.toLowerCase()
const db = config.database[node_env]
const uri = `mongodb+srv://${db.user_name}:${db.password}${db.host}${db.name}`
//create connection 

const connection = {
    connect: mongoose.connect(uri),
    port: PORT
}

module.exports = connection