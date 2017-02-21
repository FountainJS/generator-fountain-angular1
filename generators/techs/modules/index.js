'use strict';

const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  writing: {
    src() {
      const files = [
        'src/index.js',
        'src/index.css',
        'src/app/footer.js',
        'src/app/footer.spec.js',
        'src/app/footer.html',
        'src/app/header.js',
        'src/app/header.spec.js',
        'src/app/header.html',
        'src/app/main.js',
        'src/app/main.spec.js',
        'src/app/main.html',
        'src/app/title.js',
        'src/app/title.spec.js',
        'src/app/title.html',
        'src/app/techs/tech.js',
        'src/app/techs/tech.html',
        'src/app/techs/techs.js',
        'src/app/techs/tech.spec.js',
        'src/app/techs/techs.spec.js',
        'src/app/techs/index.js',
        'src/app/techs/techs.html'
      ];

      files.forEach(file => {
        const prefix = this.options.modules === 'systemjs' ? 'src/' : '';
        const templateUrl = file.replace(
          /^src\/(.*\/[^.]*).*$/,
          `${prefix}$1.html`
        );
        this.copyTemplate(file, file, {templateUrl});
      });
    },

    techs() {
      this.prepareTechJson();
    }
  }
});
