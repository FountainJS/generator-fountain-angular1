  beforeEach(module('app', ($provide: ng.auto.IProvideService) => {
    $provide.factory('<%- componentName %>', () => {
      return {
        templateUrl: 'app/<%- name %>.html'
      };
    });
  }));
