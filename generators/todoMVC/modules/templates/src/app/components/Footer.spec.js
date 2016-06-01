var angular = require('angular');
require('angular-mocks');
var Footer = require('./Footer');

describe('Footer component', function () {
  beforeEach(function () {
    angular
      .module('footerComponent', ['<%- templateUrl %>'])
      .component('footerComponent', Footer);
    angular.mock.module('footerComponent');
  });

  it('should render correctly', angular.mock.inject(function ($rootScope, $compile) {
    var $scope = $rootScope.$new();
    $scope.activeCount = 2;
    var element = $compile('<footer-component active-count="activeCount"></footer-component>')($scope);
    $scope.$digest();
    var footer = element.find('strong');
    expect(footer.html().trim()).toEqual('2');
  }));

  it('shoud call onClearCompleted', angular.mock.inject(function ($componentController) {
    var bindings = {
      onClearCompleted: function () {}
    };
    var component = $componentController('footerComponent', {}, bindings);
    spyOn(component, 'onClearCompleted').and.callThrough();
    component.handleClear();
    expect(component.onClearCompleted).toHaveBeenCalled();
  }));

  it('shoud call onShow', angular.mock.inject(function ($componentController) {
    var bindings = {
      onShow: function () {}
    };
    var component = $componentController('footerComponent', {}, bindings);
    spyOn(component, 'onShow').and.callThrough();
    component.handleChange('show_all');
    expect(component.onShow).toHaveBeenCalledWith({filter: 'show_all'});
  }));
});

