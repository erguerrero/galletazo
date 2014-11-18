// -----------------------
// Variables
// -----------------------
'use strict';

var express = require('express');

// -----------------------
// Main
// -----------------------

// Configure the app
var app = express();

require('./config/express')(app);

module.exports = app;