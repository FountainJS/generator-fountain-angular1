  beforeEach(() => {
    angular
      .module('<%- filterName %>', [])
      .component('<%- filterName %>', <%- filterName %>);
    angular.mock.module('<%- filterName %>');
  });
