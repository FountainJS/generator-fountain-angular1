/// <reference path="../../../typings/index.d.ts" />

describe('Header component', () => {
  const todos: Todo[] = [
    {
      text: 'Use ngrx/store',
      completed: false,
      id: 0
    }
  ];

  class MockTodoService {
    addTodo(text: string, todos: Todo[]) {
      return [
        {
          id: (todos.length === 0) ? 0 : todos[0].id + 1,
          completed: false,
          text
        }
      ].concat(todos);
    }
  }

  beforeEach(angular.mock.module('app', $provide => {
    $provide.factory('todoService', () => {
      return new MockTodoService();
    });
  }));

  beforeEach(angular.mock.module('app', $provide => {
    $provide.factory('headerComponent', () => {
      return {
        templateUrl: 'app/components/Header.html'
      };
    });
  }));

  beforeEach(angular.mock.module('app'));

  it('should render correctly', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<header-component></header-component>')($rootScope);
    $rootScope.$digest();
    const header = element.find('h1');
    expect(header.html().trim()).toEqual('todos');
  }));

  it('should get the todos binded to the component', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService, $componentController) => {
    const component = $componentController('headerComponent', {}, {todos});
    spyOn(component, 'handleSave').and.callThrough();
    expect(component.todos.length).toEqual(1);
    component.handleSave('New Task');
    expect(component.handleSave).toHaveBeenCalledWith('New Task');
    expect(component.todos.length).toEqual(2);
  }));
});
