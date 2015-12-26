const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  prompting: function () {
    this.options.framework = 'angular1';
    this.fountainPrompting();
  },

  configuring: function () {
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

  composing: function () {
    this.composeWith('fountain-gulp', { options: this.props }, {
      local: require.resolve('generator-fountain-gulp/generators/app')
    });
  },

  writing: function () {
    const props = { modules: this.props.modules !== 'inject' };

    this.fs.copyTpl(
      this.templatePath('src'),
      this.destinationPath('src'),
      props
    );
  }
});
