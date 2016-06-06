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
        angular: '^1.5.0'
      },
      devDependencies: {
        'angular-mocks': '^1.5.0',
        'gulp-angular-templatecache': '^1.8.0'
      }
    });
    if (this.props.router === 'router') {
      this.mergeJson('package.json', {
        dependencies: {
          '@angular/router': '2.0.0-rc.1'
        }
      });
    } else if (this.props.router === 'uirouter') {
      this.mergeJson('package.json', {
        dependencies: {
          'angular-ui-router': '^0.3.1'
        }
      });
    }
  },

  default() {
    const options = {
      framework: this.props.framework,
      modules: this.props.modules,
      js: this.props.js,
      css: this.props.css,
      router: this.props.router,
      sample: this.props.sample
    };

    this.composeWith(`fountain-angular1:${this.props.sample}`, {options}, {
      local: require.resolve(`../${this.props.sample}/${this.props.modules === 'inject' ? 'inject' : 'modules'}`)
    });
    this.composeWith('fountain-gulp', {options}, {
      local: require.resolve('generator-fountain-gulp/generators/app')
    });
  },

  writing() {
    if (this.props.router === 'uirouter') {
      this.copyTemplate('src/router/routes.js', 'src/routes.js', this.props);
    }
    this.copyTemplate('src/index.html', 'src/index.html');
  }
});
