const chalk = require('chalk');


console.log(chalk.green('Success'));
console.log(chalk.yellow.inverse.bold('Congrats'));



const command = process.argv[2];
console.log(process.argv[2]);
if (command === 'lobo') {
  console.log('adding node');
} else if (command === 'remove') {
  console.log('removing node');
}