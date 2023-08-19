const fs = require("fs")
const path = require("path")
const {getCurrentTimestamp} = require("./internal")

function logDebug(message, config, logDir = "orbitlogs") {
    const logsFolderPath = path.join(process.cwd(), logDir)
    var timestamp = getCurrentTimestamp()

    if(config.logFormat === "json") {
        const debugFilePath = path.join(logsFolderPath, 'debug.json')
        const debugMessage = {timestamp: timestamp, message: message}

        if(!fs.existsSync(logsFolderPath)) {
            fs.mkdirSync(logsFolderPath)
        }
    
        let existingLogs = []
    
        if(fs.existsSync(debugFilePath)) {
            const logsContent = fs.readFileSync(debugFilePath, 'utf-8')
            existingLogs = JSON.parse(logsContent)
        }

        existingLogs.push(debugMessage)
        fs.writeFileSync(debugFilePath, JSON.stringify(existingLogs, null, 2))

        console.log(`LogOrbit: Debug Message logged at ${debugFilePath}`)
    } else if(config.logFormat === "text") {
        const debugFilePath = path.join(logsFolderPath, 'debug.txt')
        const debugMessage = `${timestamp}: ${message}`

        if(!fs.existsSync(logsFolderPath)) {
            fs.mkdirSync(logsFolderPath)
        }

        fs.appendFileSync(debugFilePath, debugMessage + '\n')
        console.log(`LogOrbit: Debug Message logged at ${debugFilePath}`)
    }

    console.log(`LogOrbit: ${timestamp} - ${message}`)
}

module.exports = logDebug