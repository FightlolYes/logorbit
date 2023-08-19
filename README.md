# This project is still under heavy development

# LogOrbit 1.2.0

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

## Changelog [1.2.0] - 2023-08-20

### Added
- Introduced the `logDebug()` function for logging debug messages in a seperate file (JSON/Text)

### Changed
- Enhanced console logging format to include a consistent prefix and timestamp.

## Usage

```javascript
const logorbit = require("logOrbit")

logorbit.setLog('json') // Logging method is plain text by default

logorbit.logError("Your error")

logorbit.logDebug("Server started at port 5000")
```

## Contributing
Contributions are more than welcome! If you find issues or have improvements in mind, please don't hesitate to open an issue or submit a pull request on the GitHub respository

## License 
This project is licensed under the MIT License, For more information, see the [LICENSE](https://github.com/FightlolYes/swiftlog/blob/main/LICENSE) file.

