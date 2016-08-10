const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  writing() {
    const name = this.options.name || 'service';
    const titleCase = string => string.charAt(0).toUpperCase() + string.slice(1);
    const path = this.options.dir ? `src/app/${this.options.dir}` : `src/app`;
    const typings = this.options.dir ? this.options.dir.split('/').reduce(prev => `../${prev}`, '../../typings/index.d.ts') : '../../typings/index.d.ts';
    const props = {
      serviceName: titleCase(name),
      modules: this.config.get('props').modules,
      js: this.config.get('props').js,
      framework: 'angular1',
      name,
      typings
    };
    this.copyTemplate(`src/app/service.js`, `${path}/${name}.js`, props);
    this.copyTemplate(`src/app/service.spec.js`, `${path}/${name}.spec.js`, props);
  }
});
