describe('Footer component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('footerComponent', function () {
      return {
        templateUrl: 'app/components/Footer.html'
      };
    });
  }));

  beforeEach(angular.mock.module('app'));

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

