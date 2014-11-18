'use strict';

// -----------------------
// Module dependencies
// -----------------------
var env = process.env.NODE_ENV || 'development',
  helpers = require('view-helpers'),
  express = require('express'),
  config = require('./config')[env],
  port = process.env.PORT || 5000;

// -----------------------
// Expose
// -----------------------
module.exports = function(app) {

  // use express favicon
  app.use(require('serve-favicon')(config.root + '/public/favicon.ico'));

  app.use(require('body-parser').urlencoded({
    extended: true
  }));

  // views config
  app.set('views', config.root + '/_app/views');
  app.set('view engine', 'jade');

  // view helpers
  app.use(helpers(config.title));

  app.listen(port, function() {
    console.log('Listening on ' + port);
  });

  require('../routes/view-routes')(app);

  // static
  app.use(express.static(config.root + config.publicdir));

  // custom error handler
  app.use(function(err, req, res, next) {
    if (err.message && (~err.message.indexOf('not found') ||
      (~err.message.indexOf('Cast to ObjectId failed')))) {
      return next();
    }

    console.error(err.stack);
    res.status(500).render('500', {
      config: config
    });
  });

  app.use(function(req, res) {
    res.status(404).render('404', {
      config: config
    });
  });
};