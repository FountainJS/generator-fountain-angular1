import * as angular from 'angular';
import 'angular-mocks';
import {TodoItem} from './TodoItem';

describe('TodoItem component', () => {
  beforeEach(() => {
    angular
      .module('todoItem', ['<%- templateUrl %>'])
      .component('todoItem', TodoItem);
    <%- modules !== 'systemjs' ? 'angular.mock.' : '' %>module('todoItem');
  });

  it('should render correctly', <%- modules !== 'systemjs' ? 'angular.mock.' : '' %>inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const $scope = $rootScope.$new();
    const element = $compile('<todo-item></todo-item>')($scope);
    $scope.$digest();
    const li = element.find('li');
    expect(li).not.toBeNull();
  }));

  it('should call set editing to true', <%- modules !== 'systemjs' ? 'angular.mock.' : '' %>inject($componentController => {
    const component = $componentController('todoItem', {}, {});
    spyOn(component, 'handleDoubleClick').and.callThrough();
    component.handleDoubleClick();
    expect(component.handleDoubleClick).toHaveBeenCalled();
    expect(component.editing).toEqual(true);
  }));

  it('should call onSave', <%- modules !== 'systemjs' ? 'angular.mock.' : '' %>inject($componentController => {
    const bindings = {
      todo: {
        text: 'Use ngrx/store',
        completed: false,
        id: 0
      },
      onSave: () => {return; }
    };
    const component = $componentController('todoItem', {}, bindings);
    spyOn(component, 'onSave').and.callThrough();
    component.handleSave('Hello');
    expect(component.onSave).toHaveBeenCalledWith({
      todo: {text: 'Hello', id: 0}
    });
  }));
});
