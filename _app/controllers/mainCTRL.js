'use strict';

// -----------------------
// Variables
// -----------------------
var env = process.env.NODE_ENV || 'development',
  config = require('../../config/config')[env];

// -----------------------
// Exports
// -----------------------

exports.home = function(req, res) {
  res.render('layouts/desktop', {
    config: config
  });
};