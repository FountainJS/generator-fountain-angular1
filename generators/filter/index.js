const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  writing() {
    const name = this.options.name || 'filter';
    const lowerCase = string => string.charAt(0).toLowerCase() + string.slice(1);
    const path = this.options.dir ? `src/app/${this.options.dir}` : `src/app`;
    const props = {
      filterName: lowerCase(name),
      modules: this.config.get('props').modules,
      js: this.config.get('props').js,
      framework: 'angular1',
      name
    };
    this.copyTemplate(`src/app/filter.js`, `${path}/${name}.js`, props);
    this.copyTemplate(`src/app/filter.spec.js`, `${path}/${name}.spec.js`, props);
  }
});
