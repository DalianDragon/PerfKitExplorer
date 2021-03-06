// Karma configuration
// Generated on Tue Jan 06 2015 17:14:05 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',
    frameworks: ['jasmine', 'closure'],

    files: [
      'third_party/js/jquery/jquery.js',
      'third_party/js/angularjs/angular.js',
      'third_party/js/angularjs/angular-mocks.js',
      'third_party/js/bootstrap-ui/bootstrap-ui.js',
      'third_party/js/codemirror/codemirror.js',
      'third_party/js/uiGrid/ui-grid.js',
      'third_party/js/jsapi/jsapi.js',
      'test/js/globals.js',
      // closure base
      {pattern: 'lib/closure-library/closure/goog/base.js'},
      // included files - tests
      {pattern: 'client/**/*_test.js'},
      // these are only watched and served
      {pattern: 'client/**/*!(_test).js', included: false},
      // these are only watched and served
      {pattern: 'client/**/*.html'},
      // external deps
      {pattern: 'lib/closure-library/closure/goog/deps.js', included: false, served: false},
      {pattern: 'lib/closure-library/closure/goog/**/*.js', included: false}
    ],

    preprocessors: {
      'client/**/*.html': ['html2js'],
      'client/**/*_test.js': ['closure', 'closure-iit'],
      'client/**/*!(_test).js': ['closure'],
      'lib/closure-library/closure/goog/deps.js': ['closure-deps']
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'client/',
      prependPrefix: '/static/',
      moduleName: 'p3rf.perfkit.explorer.templates'
    },

    reporters: ['progress', 'html'],
    browsers: ['Chrome'],

    autoWatch: true,
    singleRun: false
  });
};
