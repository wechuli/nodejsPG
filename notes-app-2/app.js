const validator = require("validator");
const chalk = require("chalk");

console.log(validator.isEmail("wechulipaul@yahoo.com"));
console.log(validator.isURL("https://google.com"));
console.log(chalk.blue("Hi there, am blue"));
console.log(chalk.bold.inverse.magenta("Hi am green"));
