'use strict';

const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  configuring() {
    this.mergeJson('package.json', {
      dependencies: {
        'todomvc-app-css': '^2.0.6'
      }
    });
  },

  writing: {
    src() {
      const files = [
        'src/index.html',
        'src/index.js',
        'src/index.css',
        'src/app/components/Footer.js',
        'src/app/components/Footer.spec.js',
        'src/app/components/Footer.html',
        'src/app/components/Header.js',
        'src/app/components/Header.spec.js',
        'src/app/components/Header.html',
        'src/app/components/MainSection.js',
        'src/app/components/MainSection.spec.js',
        'src/app/components/MainSection.html',
        'src/app/components/TodoItem.js',
        'src/app/components/TodoItem.spec.js',
        'src/app/components/TodoItem.html',
        'src/app/components/TodoTextInput.js',
        'src/app/components/TodoTextInput.spec.js',
        'src/app/components/TodoTextInput.html',
        'src/app/constants/TodoFilters.js',
        'src/app/constants/VisibilityFilters.js',
        'src/app/containers/App.js',
        'src/app/containers/App.html',
        'src/app/todos/todos.js',
        'src/app/todos/todos.spec.js'
      ];

      files.forEach(file => {
        const templateUrl = file.replace(
          /^src\/(.*\/)*(.*)\.(spec\.[A-z]+$)/,
          `$1$2.html`
        );
        this.copyTemplate(file, file, {templateUrl});
      });
    }
  }
});
