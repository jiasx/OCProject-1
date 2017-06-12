'use strict';

exports.config = {
  seleniumServerJar: './node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar',
  framework: 'jasmine',
  specs: ['build-tests/e2e/*-spec.js'],
  capabilities: {
    'browserName': 'chrome',
  },
  jasmineNodeOpts: {
    showColors: true
  },
};
