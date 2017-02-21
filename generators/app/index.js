'use strict';

const fountain = require('fountain-generator');
const version = require('../../package.json').version;

module.exports = fountain.Base.extend({
  prompting: {
    fountain() {
      this.options.framework = 'angular1';
      return this.fountainPrompting();
    },

    sample() {
      this.option('sample', {type: Boolean, required: false});

      const prompts = [{
        when: !this.options.sample,
        type: 'list',
        name: 'sample',
        message: 'Do you want a sample app?',
        choices: [
          {name: 'A working landing page', value: 'techs'},
          {name: 'Just a Hello World', value: 'hello'},
          {name: 'TodoMVC', value: 'todoMVC'}
        ]
      }, {
        when: !this.options.router,
        type: 'list',
        name: 'router',
        message: 'Would you like a router?',
        choices: [
          // {name: 'Angular Component Router (Angular 2 router)', value: 'router'},
          {name: 'Angular UI Router', value: 'uirouter'},
          {name: 'None', value: 'none'}
        ]
      }];

      return this.prompt(prompts).then(props => {
        Object.assign(this.props, props);
      });
    }
  },

  configuring() {
    this.config.set('version', version);
    this.config.set('props', this.props);
    this.mergeJson('package.json', {
      dependencies: {
        angular: '^1.6.2'
      },
      devDependencies: {
        '@types/angular': '^1.6.6',
        '@types/angular-mocks': '^1.5.9',
        '@types/jquery': '^2.0.40',
        'angular-mocks': '^1.6.2',
        'gulp-angular-templatecache': '^2.0.0'
      }
    });
    if (this.props.router === 'uirouter') {
      this.mergeJson('package.json', {
        dependencies: {
          'angular-ui-router': '1.0.0-beta.3'
        },
        devDependencies: {
          '@types/angular-ui-router': '^1.1.36'
        }
      });
    }
  },

  composing() {
    const options = {
      framework: this.props.framework,
      modules: this.props.modules,
      js: this.props.js,
      ci: this.props.ci,
      css: this.props.css,
      router: this.props.router,
      sample: this.props.sample,
      skipInstall: this.props.skipInstall,
      skipCache: this.props.skipCache
    };

    this.composeWith(require.resolve(`../${this.props.sample}/${this.props.modules === 'inject' ? 'inject' : 'modules'}`), options);
    this.composeWith(require.resolve('generator-fountain-gulp/generators/app'), options);
  },

  writing() {
    if (this.props.router === 'uirouter') {
      this.copyTemplate('src/routes.js', 'src/routes.js', this.props);
    }
    this.copyTemplate('src/index.html', 'src/index.html', {router: this.props.router});
  }
});
