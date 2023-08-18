const fs = require("fs")
const path = require("path")

function logError(error, logDir = "swiftlogs") {

    const logsFolderPath = path.join(process.cwd(), logDir)
    const errorFilePath = path.join(logsFolderPath, 'errors.txt')

    if(!fs.existsSync(logsFolderPath)) {
        fs.mkdirSync(logsFolderPath)
    }

    fs.appendFileSync(errorFilePath, error + '\n')

    console.log(error)
}

module.exports = logError