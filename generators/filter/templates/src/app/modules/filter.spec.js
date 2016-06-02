  beforeEach(function () {
    angular
      .module('<%- filterName %>', [])
      .component('<%- filterName %>', <%- filterName %>);
    angular.mock.module('<%- filterName %>');
  });
