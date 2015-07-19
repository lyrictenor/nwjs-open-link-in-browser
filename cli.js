#!/usr/bin/env node
/*eslint no-console:0*/
'use strict';
var meow = require('meow');
var nwjsOpenLinkInBrowser = require('./');

var cli = meow({
  help: [
    'Usage',
    '  $ nwjs-open-link-in-browser [input]',
    '',
    'Examples',
    '  $ nwjs-open-link-in-browser',
    '  unicorns & rainbows',
    '',
    '  $ nwjs-open-link-in-browser ponies',
    '  ponies & rainbows',
    '',
    'Options',
    '  --foo  Lorem ipsum. Default: false'
  ]
});

console.log(nwjsOpenLinkInBrowser(cli.input[0] || 'unicorns'));
