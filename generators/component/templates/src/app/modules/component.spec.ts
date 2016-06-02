  beforeEach(() => {
    angular
      .module('<%- componentName %>', ['<%- templateUrl %>'])
      .component('<%- componentName %>', <%- componentName %>);
    <%- modules === 'webpack' ? 'angular.mock.' : '' %>module('<%- componentName %>');
  });
