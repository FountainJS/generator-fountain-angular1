describe('MainSection component', () => {
  class MockTodoService {
    addTodo() {}
    editTodo() {}
    deleteTodo() {}
    completeTodo() {}
    completeAll() {}
    clearCompleted() {}
  }

  let component;

  beforeEach(module('app', $provide => {
    $provide.factory('mainSection', () => {
      return {
        templateUrl: 'app/components/MainSection.html'
      };
    });
  }));

  beforeEach(module('app', $provide => {
    $provide.factory('todoService', () => {
      return new MockTodoService();
    });
  }));

  beforeEach(angular.mock.module('app'));

  beforeEach(angular.mock.inject($componentController => {
    component = $componentController('mainSection', {}, {});
  }));

  it('shoud call clearCompleted', () => {
    spyOn(component.todoService, 'clearCompleted').and.callThrough();
    component.handleClearCompleted();
    expect(component.todoService.clearCompleted).toHaveBeenCalled();
  });

  it('shoud call completeAll', () => {
    spyOn(component.todoService, 'completeAll').and.callThrough();
    component.handleCompleteAll();
    expect(component.todoService.completeAll).toHaveBeenCalled();
  });

  it('shoud set selectedFilter', () => {
    component.handleShow('show_completed');
    expect(component.selectedFilter.type).toEqual('show_completed');
    expect(component.selectedFilter.filter({completed: true})).toEqual(true);
  });

  it('shoud call completeTodo', () => {
    spyOn(component.todoService, 'completeTodo').and.callThrough();
    component.handleChange();
    expect(component.todoService.completeTodo).toHaveBeenCalled();
  });

  it('shoud call deleteTodo', () => {
    spyOn(component.todoService, 'deleteTodo').and.callThrough();
    component.handleSave({text: ''});
    expect(component.todoService.deleteTodo).toHaveBeenCalled();
  });

  it('shoud call editTodo', () => {
    spyOn(component.todoService, 'editTodo').and.callThrough();
    component.handleSave({text: 'Hello'});
    expect(component.todoService.editTodo).toHaveBeenCalled();
  });

  it('shoud call deleteTodo', () => {
    spyOn(component.todoService, 'deleteTodo').and.callThrough();
    component.handleDestroy();
    expect(component.todoService.deleteTodo).toHaveBeenCalled();
  });
});
