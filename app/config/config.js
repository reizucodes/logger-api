require('dotenv').config()
const env = process.env
const config = {
    env : env,
    database: {
        local: {
            host: '127.0.0.1',
            name: 'root',
            user_name: 'root',
            password: ''
        },
        development: {
            host: env.DB_HOST,
            name: env.DB_NAME,
            user_name: env.DB_USERNAME,
            password: env.DB_PASSWORD
        }
    }
}
module.exports = config