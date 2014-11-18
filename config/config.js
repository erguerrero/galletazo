'use strict';

// -----------------------
// VARS
// -----------------------
var path = require('path'),
  rootPath = path.resolve(__dirname + '../..'),
  _title = 'Esqueleto',
  _description = 'TODO: DESC';

// -----------------------
// Expose config
// -----------------------
module.exports = {
  development: {
    root: rootPath,
    publicdir: '/public',
    title: _title,
    description: _description
  },
  production: {
    root: rootPath,
    publicdir: '/public',
    title: _title,
    description: _description
  }
};