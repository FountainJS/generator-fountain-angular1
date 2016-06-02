  beforeEach(module('app', function ($provide) {
    $provide.factory('<%- componentName %>', function () {
      return {
        templateUrl: 'app/<%- name %>.html'
      };
    });
  }));
