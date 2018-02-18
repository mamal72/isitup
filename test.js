/* eslint-disable import/no-extraneous-dependencies */

const test = require('tape');
const execa = require('execa');
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

test('It should be string has righ output when call --help command', async t => {
  t.plan(2);
  const {stdout} = await execa('./cli.js', ['--help']);
  t.equal(typeof stdout, 'string');
  t.equal(stdout.indexOf('github.com'), 103);
});

test('It should be string and has right output when check google.com', async t => {
  t.plan(2);
  const {stdout} = await execa('./cli.js', ['google.com']);
  t.equal(typeof stdout, 'string');
  t.equal(stdout.indexOf('google.com'), 8);
});
