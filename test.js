'use strict';
var assert = require('power-assert');
var nwjsOpenLinkInBrowser = require('./');

it('should ', function () {
  assert.strictEqual(nwjsOpenLinkInBrowser('unicorns'), 'unicorns & rainbows');
});
it('should not ', function () {
  assert.strictEqual(nwjsOpenLinkInBrowser('unicorns'), 'unicorns & wrong');
});
