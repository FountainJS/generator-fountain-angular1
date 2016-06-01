describe('TodoItem component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('todoItem', function () {
      return {
        templateUrl: 'app/components/TodoItem.html'
      };
    });
  }));

  beforeEach(angular.mock.module('app'));

  it('should render correctly', angular.mock.inject(function ($rootScope, $compile) {
    var $scope = $rootScope.$new();
    var element = $compile('<todo-item></todo-item>')($scope);
    $scope.$digest();
    var li = element.find('li');
    expect(li).not.toBeNull();
  }));

  it('should call set editing to true', angular.mock.inject(function ($componentController) {
    var component = $componentController('todoItem', {}, {});
    spyOn(component, 'handleDoubleClick').and.callThrough();
    component.handleDoubleClick();
    expect(component.handleDoubleClick).toHaveBeenCalled();
    expect(component.editing).toEqual(true);
  }));

  it('should call onSave', angular.mock.inject(function ($componentController) {
    var bindings = {
      todo: {
        text: 'Use ngrx/store',
        completed: false,
        id: 0
      },
      onSave: function () {}
    };
    var component = $componentController('todoItem', {}, bindings);
    spyOn(component, 'onSave').and.callThrough();
    component.handleSave('Hello');
    expect(component.onSave).toHaveBeenCalledWith({
      todo: {text: 'Hello', id: 0}
    });
  }));
});
