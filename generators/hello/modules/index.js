'use strict';

const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  writing() {
    const files = [
      'src/index.js',
      'src/index.css',
      'src/app/hello.js',
      'src/app/hello.spec.js',
      'src/app/hello.html'
    ];

    files.forEach(file => {
      const prefix = this.options.modules === 'systemjs' ? 'src/' : '';
      const templateUrl = file.replace(
        /^src\/(.*\/[^.]*).*$/,
        `${prefix}$1.html`
      );
      this.copyTemplate(file, file, {templateUrl});
    });
  }
});
