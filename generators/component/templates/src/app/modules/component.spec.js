  beforeEach(function () {
    angular
      .module('<%- componentName %>', ['<%- templateUrl %>'])
      .component('<%- componentName %>', <%- componentName %>);
    angular.mock.module('<%- componentName %>');
  });
