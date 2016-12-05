const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  writing() {
    const name = this.options.name || 'service';
    const titleCase = string => string.charAt(0).toUpperCase() + string.slice(1);
    const path = this.options.dir ? `src/app/${this.options.dir}` : `src/app`;
    const props = {
      serviceName: titleCase(name),
      modules: this.config.get('props').modules,
      js: this.config.get('props').js,
      framework: 'angular1',
      name
    };
    this.copyTemplate(`src/app/service.js`, `${path}/${name}.js`, props);
    this.copyTemplate(`src/app/service.spec.js`, `${path}/${name}.spec.js`, props);
  }
});
