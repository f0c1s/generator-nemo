/*global describe:true, it:true, before:true, after:true */
'use strict';

var nemoFactory = require('nemo-mocha-factory'),
  yreg = require('../lib/yreg'),
  plugins = require('../config/nemo-plugins'),
  setup = {
    "view": ['yhooreg']
  };

describe('Nemo @yhooregSuite@', function() {

  nemoFactory({
    'plugins': plugins,
    'setup': setup
  });

  it('will @yhooregTest@', function(done) {
    nemo.driver.get('https://edit.yahoo.com/registration');
    yreg(nemo).registerYahooAccount();
    nemo.driver.sleep(4000).then(function() {
        done();
    }, function(err) {
      done(err);
    });
  });
});