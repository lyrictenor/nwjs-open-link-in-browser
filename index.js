'use strict';

var isNwjs = require('is-nwjs');
var type = require('type-detect');

module.exports = function (url, event) {
  if (!isNwjs) {
    return;
  }

  var gui = require('nw.gui');
  if (type(url) === 'string') {
    event.preventDefault();
    gui.Shell.openExternal(url);
  } else {
    event = url;
    event.preventDefault();
    gui.Shell.openExternal(event.target.href);
  }
};
