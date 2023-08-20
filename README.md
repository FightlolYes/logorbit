# This project is still under heavy development

[![npm version](https://badge.fury.io/js/logorbit.svg)](https://badge.fury.io/js/logorbit)

# LogOrbit

**LogOrbit** is a simple and lightweight logging library for Node.JS applications. It provides an effortless way to log various types of information, from errors to debug messages, with minimal setup.

## Table Of Contents
- [Changelog](#changelog-120---2023-08-20)
- [Installation](#installation)
- [Usage](#usage)
  - [Setting Logging Method](#setting-logging-method)
  - [Logging Errors](#logging-errors)
  - [Logging Debug Messages](#logging-debug-messages)
- [Contributing](#contributing)
- [License](#license)


## Changelog [1.2.0] - 2023-08-20

### Added
- Introduced the `logDebug()` function for logging debug messages in a seperate file (JSON/Text)

### Changed
- Enhanced console logging format to include a consistent prefix and timestamp.

## Installation

Install **LogOrbit** using npm or yarn:

```sh
npm install logorbit
```

or if you prefer yarn:

```sh
yarn add logorbit
```

## Usage

### Setting Logging Method
Use the `setLog()` function to set the logging method to json or plain text.
```javascript
const logorbit = require("logorbit")

logorbit.setLog("json")
```

This will set the logging method to json

or

```javascript
const logorbit = require("logorbit")

logorbit.setLog("text")
```

This will set the logging method to plain text


### Logging errors
Utilize the `logError()` function to record various error messages in either JSON or text format, depending on the chosen method

```javascript
const logorbit = require("logorbit")
logorbit.setLog("text")
var error = "some error"

logorbit.logError(error)
```

#### Text: `error.txt`
```
19-08-2023 20:08:45: Some error
```

#### JSON `error.json`
```
[
  {
    "timestamp": "19-08-2023 20:08:45",
    "message": "Some error"
  }
]
```

This action will generate a directory named `orbitlogs` within your project's root folder if it doesn't already exist. Inside this directory, a file named `errors.txt` will be created to store all error logs

### Logging Debug Messages

Utilize the `logDebug()` function to record debug messages in chosen file format

```javascript
const logorbit = require("logorbit")
logorbit.setLog("text")

logorbit.logDebug("Server started on port 5000")
```

#### Text: `debug.txt`
```
19-08-2023 20:08:45: Port set to 5000
```

#### JSON `debug.json`
```
[
  {
    "timestamp": "19-08-2023 20:08:45",
    "message": "Server started on port 5000"
  }
]
```

This action will generate a directory named `orbitlogs` within your project's root folder if it doesn't already exist. Inside this directory, a file named `debug.txt` will be created to store all error logs

## Contributing
Contributions are more than welcome! If you find issues or have improvements in mind, please don't hesitate to open an issue or submit a pull request on the GitHub respository

## License 
This project is licensed under the MIT License, For more information, see the [LICENSE](https://github.com/FightlolYes/swiftlog/blob/main/LICENSE) file.

