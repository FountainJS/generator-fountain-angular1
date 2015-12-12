const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  prompting: function () {
    this.options.framework = 'angular1';
    this.fountainPrompting();
  },

  configuring: function () {
    this.mergeJson('package.json', {
      dependencies: {
        angular: '^1.5.0-beta.2'
      },
      devDependencies: {
        'angular-mocks': '^1.5.0-beta.2'
      }
    });
  },

  composing: function () {
    this.composeWith('fountain-gulp', { options: this.props });
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('src'),
      this.destinationPath('src'),
      { modules: this.props.modules !== 'inject' }
    );
  }
});
