const fs = require("fs")
const path = require("path")
const {getCurrentTimestamp} = require("./internal")

function logError(error, config,logDir = "orbitlogs") {

    console.log(config.logFormat)

    const logsFolderPath = path.join(process.cwd(), logDir)
    var timestamp = getCurrentTimestamp()

    if(config.logFormat === "json") {

        const errorFilePath = path.join(logsFolderPath, 'errors.json')
        const errorMessage = {timestamp: timestamp, mesage: error}

        if(!fs.existsSync(logsFolderPath)) {
            fs.mkdirSync(logsFolderPath)
        }

        let existingLogs = []

        if(fs.existsSync(errorFilePath)) {
            const logsContent = fs.readFileSync(errorFilePath, 'utf-8')
            existingLogs = JSON.parse(logsContent)
        }

        existingLogs.push(errorMessage)
        fs.writeFileSync(errorFilePath, JSON.stringify(existingLogs, null, 2))

        console.log(`LogOrbit: Error logged at ${errorFilePath}`)
    } else if(config.logFormat === "text") {
        const errorFilePath = path.join(logsFolderPath, 'errors.txt')
        const errorMessage = `${timestamp}: ${error}`
        if(!fs.existsSync(logsFolderPath)) {
            fs.mkdirSync(logsFolderPath)
        }
    
        fs.appendFileSync(errorFilePath, errorMessage + '\n')

        console.log(`LogOrbit: Error logged at ${errorFilePath}`)
    }

    console.log(`${timestamp}: ${error}`)
}

module.exports = logError