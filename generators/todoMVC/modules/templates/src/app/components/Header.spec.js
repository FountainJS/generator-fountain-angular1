var angular = require('angular');
require('angular-mocks');
var Header = require('./Header');

describe('Header component', function () {
  var todos = [
    {
      text: 'Use ngrx/store',
      completed: false,
      id: 0
    }
  ];

  function MockTodoService() {
  }

  MockTodoService.prototype.addTodo = function (text, todos) {
    return [
      {
        id: (todos.length === 0) ? 0 : todos[0].id + 1,
        completed: false,
        text: text
      }
    ].concat(todos);
  };

  beforeEach(function () {
    angular
      .module('headerComponent', ['<%- templateUrl %>'])
      .service('todoService', MockTodoService)
      .component('headerComponent', Header);
    angular.mock.module('headerComponent');
  });

  it('should render correctly', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<header-component></header-component>')($rootScope);
    $rootScope.$digest();
    var header = element.find('h1');
    expect(header.html().trim()).toEqual('todos');
  }));

  it('should get the todos binded to the component', angular.mock.inject(function ($rootScope, $compile, $componentController) {
    var component = $componentController('headerComponent', {}, {todos: todos});
    spyOn(component, 'handleSave').and.callThrough();
    expect(component.todos.length).toEqual(1);
    component.handleSave('New Task');
    expect(component.handleSave).toHaveBeenCalledWith('New Task');
    expect(component.todos.length).toEqual(2);
  }));
});
