const logError = require("./src/error")
const logDebug = require("./src/debug")

let config = {
    logDirName: 'orbitlogs', // Default
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

function setDirName(logDirName) {
    config.logDirName = logDirName
}

module.exports = {
    logError: (error, logDir) => logError(error, config, logDir),
    logDebug: (message, logDir) => logDebug(message, config, logDir),
    setDirName: setDirName,
    setLog: setLog,
    logDirName: config.logDirName, 
    logFormat: config.logFormat,
    config: config
}