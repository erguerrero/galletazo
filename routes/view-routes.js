'use strict';

// -----------------------
// DEPS
// -----------------------
var mainCTRL = require('../_app/controllers/mainCTRL');

// -----------------------
// Expose
// -----------------------
module.exports = function(app) {

  // -----------------------
  // Views
  // -----------------------
  app.get('/', mainCTRL.home);

};