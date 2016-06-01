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

  beforeEach(module('app', function ($provide) {
    $provide.factory('todoService', function () {
      return new MockTodoService();
    });
  }));

  beforeEach(module('app', function ($provide) {
    $provide.factory('headerComponent', function () {
      return {
        templateUrl: 'app/components/Header.html'
      };
    });
  }));

  beforeEach(angular.mock.module('app'));

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
