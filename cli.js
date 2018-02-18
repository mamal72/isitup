#!/usr/bin/env node

const isitup = require('.');
const meow = require('meow');
const chalk = require('chalk');

const log = console.log;

const cli = meow(`
  Usage:
    $ isitup <website>
    
  Examples:
    $ isitup github.com
`);

// If url not set, show help and exit.
if (cli.input[0] === undefined) {
  cli.showHelp();
}

isitup(cli.input[0]).then(data => {
  let output = `domain: ${chalk.green(data.domain)}\n`;
  output += `port: ${chalk.green(data.port)}\n`;
  output += `status code: ${chalk.green(data.status_code)}\n`;
  output += `response ip: ${chalk.green(data.response_ip)}\n`;
  output += `response code: ${chalk.green(data.response_code)}\n`;
  output += `response time: ${chalk.green(data.response_time)}`;
  log(output);
}).catch(err => {
  log(err);
});
