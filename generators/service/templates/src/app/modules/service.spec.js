  beforeEach(function () {
    angular
      .module('<%- serviceName %>', [])
      .service('<%- serviceName %>', <%- serviceName %>);
    angular.mock.module('<%- serviceName %>');
  });
