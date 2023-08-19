const logError = require("./src/error")

let config = {
    logFormat: 'text' // Default log format
}

function setLog(logFormat) {
    if(logFormat == 'json' || logFormat == 'text') {
        config.logFormat = logFormat
        console.log(`logorbit logging method set to ${logFormat}`)
    }

    else {
        console.log(`LogOrbit: Invalid log format ${logFormat}, please use "json" or "text"`)
    }
}

module.exports = {
    logError: (error, logDir) => logError(error, config, logDir),
    setLog: setLog,
    logFormat: config.logFormat,
    config: config
}