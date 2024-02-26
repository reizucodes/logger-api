const fs = require('fs')
const path = require('path')

const requestLogger = (req, res, next) => {
    const now = new Date().toISOString().slice(0, 10); // Format: YYYY-MM-DD
    const file_path = path.resolve(__dirname, '../../' ,'public', 'logs', 'middleware', `requests-${now}.log`)
    const message =`[${new Date().toISOString()}] ${req.method} ${req.url}\n`;

    // Append the log message to the log files
    fs.appendFile(file_path, message, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });
    next()
}

module.exports = requestLogger