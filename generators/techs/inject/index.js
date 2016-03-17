'use strict';

const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  prompting() {
    this.fountainPrompting();
  },

  writing: {
    src() {
      const files = [
        'src/index.js',
        'src/index.css',
        'src/app/footer.js',
        'src/app/footer.html',
        'src/app/header.js',
        'src/app/header.html',
        'src/app/main.js',
        'src/app/main.html',
        'src/app/title.js',
        'src/app/title.html',
        'src/app/techs/tech.js',
        'src/app/techs/tech.html',
        'src/app/techs/techs.js',
        'src/app/techs/tech.spec.js',
        'src/app/techs/techs.spec.js',
        'src/app/techs/techs.html'
      ];

      files.map(file => {
        const templateUrl = file.replace(
          /^src\/(.*\/)*(.*)\.(spec\.[A-z]+$)/,
          `$1$2.html`
        );
        this.copyTemplate(file, file, {templateUrl});
      });
    },

    techs() {
      this.prepareTechJson();
    }
  }
});
