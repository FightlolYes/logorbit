# This project is still under heavy development

# LogOrbit 1.1.0

**LogOrbit** is a simple and lightweight logging library for Node.JS applications. It provides an effortless way to log various types of information, from errors to debug messages, with minimal setup.

## Installation

Install **LogOrbit** using npm or yarn:

```sh
npm install logorbit
```

or if you prefer yarn:

```sh
yarn add logorbit
```

## Changelog [1.1.0] - 2023-08-19

### Added
- Added features to use either JSON or text as logging methods.
- Introduced the `setlog()` function to dynamically set the log format (JSON/Text)
- Console prints the error to the terminal along with the path to the log file

### Changed
- Updated the logging format to "date time: error" while previously was just "error"

## Usage

```javascript
const logorbit = require("logOrbit")

logorbit.setLog('json') // Logging method is plain text by default

logorbit.logError("Your error")
```

## Contributing
Contributions are more than welcome! If you find issues or have improvements in mind, please don't hesitate to open an issue or submit a pull request on the GitHub respository

## License 
This project is licensed under the MIT License, For more information, see the [LICENSE](https://github.com/FightlolYes/swiftlog/blob/main/LICENSE) file.

