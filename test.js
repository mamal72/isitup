/* eslint-disable import/no-extraneous-dependencies */

const test = require('tape');
const isitup = require('./');

test('It should work and get Github.com status result with the right keys', t => {
  t.plan(1);

  const keys = ['domain', 'port', 'status_code', 'response_ip', 'response_code', 'response_time'];
  isitup('github.com').then(res => {
    t.ok(
      JSON.stringify(Object.keys(res)) === JSON.stringify(keys)
    );
  });
});
