'use strict';

const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  prompting() {
    this.fountainPrompting();
  },

  writing() {
    let templateUrl = 'app/hello.html';
    if (this.props.modules === 'systemjs') {
      templateUrl = 'src/app/hello.html';
    }

    [
      'src/index.js',
      'src/index.css',
      'src/app/hello.js',
      'src/app/hello.spec.js',
      'src/app/hello.html'
    ].map(file => this.copyTemplate(file, file, {templateUrl}));
  }
});
