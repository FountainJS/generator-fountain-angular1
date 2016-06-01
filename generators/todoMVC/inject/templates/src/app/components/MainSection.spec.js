describe('MainSection component', function () {
  function MockTodoService() {}
  MockTodoService.prototype = {
    addTodo: function () {},
    editTodo: function () {},
    deleteTodo: function () {},
    completeTodo: function () {},
    completeAll: function () {},
    clearCompleted: function () {}
  };

  var component;

  beforeEach(module('app', function ($provide) {
    $provide.factory('todoService', function () {
      return new MockTodoService();
    });
  }));

  beforeEach(module('app', function ($provide) {
    $provide.factory('mainSection', function () {
      return {
        templateUrl: 'app/components/MainSection.html'
      };
    });
  }));

  beforeEach(angular.mock.module('app'));

  beforeEach(angular.mock.inject(function ($componentController) {
    component = $componentController('mainSection', {}, {});
  }));

  it('shoud call clearCompleted', function () {
    spyOn(component.todoService, 'clearCompleted').and.callThrough();
    component.handleClearCompleted();
    expect(component.todoService.clearCompleted).toHaveBeenCalled();
  });

  it('shoud call completeAll', function () {
    spyOn(component.todoService, 'completeAll').and.callThrough();
    component.handleCompleteAll();
    expect(component.todoService.completeAll).toHaveBeenCalled();
  });

  it('shoud set selectedFilter', function () {
    component.handleShow('show_completed');
    expect(component.selectedFilter.type).toEqual('show_completed');
    expect(component.selectedFilter.filter({completed: true})).toEqual(true);
  });

  it('shoud call completeTodo', function () {
    spyOn(component.todoService, 'completeTodo').and.callThrough();
    component.handleChange();
    expect(component.todoService.completeTodo).toHaveBeenCalled();
  });

  it('shoud call deleteTodo', function () {
    spyOn(component.todoService, 'deleteTodo').and.callThrough();
    component.handleSave({text: ''});
    expect(component.todoService.deleteTodo).toHaveBeenCalled();
  });

  it('shoud call editTodo', function () {
    spyOn(component.todoService, 'editTodo').and.callThrough();
    component.handleSave({text: 'Hello'});
    expect(component.todoService.editTodo).toHaveBeenCalled();
  });

  it('shoud call deleteTodo', function () {
    spyOn(component.todoService, 'deleteTodo').and.callThrough();
    component.handleDestroy();
    expect(component.todoService.deleteTodo).toHaveBeenCalled();
  });
});
