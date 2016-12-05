const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  writing() {
    const name = this.options.name || 'directive';
    const lowerCase = string => string.charAt(0).toLowerCase() + string.slice(1);
    const path = this.options.dir ? `src/app/${this.options.dir}` : `src/app`;
    const props = {
      directiveName: lowerCase(name),
      modules: this.config.get('props').modules,
      js: this.config.get('props').js,
      framework: 'angular1',
      name
    };
    this.copyTemplate(`src/app/directive.js`, `${path}/${name}.js`, props);
    this.copyTemplate(`src/app/directive.spec.js`, `${path}/${name}.spec.js`, props);
  }
});
