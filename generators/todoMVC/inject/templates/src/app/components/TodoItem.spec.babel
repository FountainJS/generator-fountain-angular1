describe('TodoItem component', () => {
  beforeEach(module('app', $provide => {
    $provide.factory('todoItem', () => {
      return {
        templateUrl: 'app/components/TodoItem.html'
      };
    });
  }));

  beforeEach(angular.mock.module('app'));

  it('should render correctly', angular.mock.inject(($rootScope, $compile) => {
    const $scope = $rootScope.$new();
    const element = $compile('<todo-item></todo-item>')($scope);
    $scope.$digest();
    const li = element.find('li');
    expect(li).not.toBeNull();
  }));

  it('should call set editing to true', angular.mock.inject($componentController => {
    const component = $componentController('todoItem', {}, {});
    spyOn(component, 'handleDoubleClick').and.callThrough();
    component.handleDoubleClick();
    expect(component.handleDoubleClick).toHaveBeenCalled();
    expect(component.editing).toEqual(true);
  }));

  it('should call onSave', angular.mock.inject($componentController => {
    const bindings = {
      todo: {
        text: 'Use ngrx/store',
        completed: false,
        id: 0
      },
      onSave: () => {}
    };
    const component = $componentController('todoItem', {}, bindings);
    spyOn(component, 'onSave').and.callThrough();
    component.handleSave('Hello');
    expect(component.onSave).toHaveBeenCalledWith({
      todo: {text: 'Hello', id: 0}
    });
  }));
});
