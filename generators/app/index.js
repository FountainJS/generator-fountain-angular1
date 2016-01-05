'use strict';

const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  prompting() {
    this.options.framework = 'angular1';
    this.fountainPrompting();
  },

  configuring() {
    this.mergeJson('package.json', {
      dependencies: {
        angular: '^1.5.0-rc.0'
      },
      devDependencies: {
        'angular-mocks': '^1.5.0-rc.0',
        'gulp-angular-templatecache': '^1.8.0'
      }
    });
  },

  composing() {
    this.composeWith('fountain-gulp', { options: this.props }, {
      local: require.resolve('generator-fountain-gulp/generators/app')
    });
  },

  writing() {
    const files = [
      'src/index.html',
      'src/index.css',
      'src/index.js',
      'src/app/hello.component.js',
      'src/app/hello.component.spec.js',
      'src/app/hello.html'
    ];

    let templateUrl = 'app/hello.html';
    if (this.props.modules === 'systemjs') {
      templateUrl = 'src/app/hello.html';
    }

    files.map(file => {
      this.copyTemplate(file, file, { templateUrl });
    });
  }
});
