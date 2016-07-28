[![Build Status](https://travis-ci.org/mamal72/isitup.svg?branch=master)](https://travis-ci.org/mamal72/isitup)
[![Coverage Status](https://coveralls.io/repos/github/mamal72/isitup/badge.svg?branch=master)](https://coveralls.io/github/mamal72/isitup?branch=master)
[![npm version](https://badge.fury.io/js/isitup.svg)](https://badge.fury.io/js/isitup)
![dependencies](https://img.shields.io/david/mamal72/isitup.svg?maxAge=2592000)
![devDependencies](https://img.shields.io/david/dev/mamal72/isitup.svg?maxAge=2592000)


# isitup
**isitup** is a simple and small client for [isitup website](https://isitup.org) to check website status.


## Installation

Clone the repo or install it from `npm`:

```bash
npm install --save isitup
```


## Usage

```js
import isitup from 'isitup'; // or require it

isitup('github.com').then(data => {
  // Do what you want with `data`!
  // data is an object with the following keys:
  // ['domain', 'port', 'status_code', 'response_ip', 'response_code', 'response_time']
}).catch(err => {
  // Oops! Errors! :(
});
```


## Tests

Run the tests with following command:

```bash
npm test
```


## Ideas?

Just fill an issue and describe it. I'll check it ASAP. :grin:


## Contribution

You can fork the repository, improve or fix it and then send the pull requests back if you want to see them here. I really appreciate that. :heart:

Remember to write tests for your code. Execute the tests by running the following command and fix the errors if you get any.

```bash
npm test
```
