'use strict';

const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  writing() {
    [
      'src/index.js',
      'src/index.css',
      'src/app/hello.js',
      'src/app/hello.spec.js',
      'src/app/hello.html'
    ].map(file => this.copyTemplate(file, file));
  }
});
