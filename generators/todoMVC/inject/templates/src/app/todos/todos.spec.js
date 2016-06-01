describe('TodoService', function () {
  var todos;
  var todoService;

  beforeEach(function () {
    todos = [initialTodo];
    todoService = new TodoService();
  });

  it('should add a todo to the list', function () {
    var res = todoService.addTodo('Hello', todos);
    expect(res.length).toEqual(2);
    expect(res[0].id).toEqual(1);
  });

  it('should complete a todo', function () {
    var res = todoService.completeTodo(0, todos);
    expect(res.length).toEqual(1);
    expect(res[0].completed).toEqual(true);
  });

  it('should delete a todo', function () {
    var res = todoService.deleteTodo(0, todos);
    expect(res.length).toEqual(0);
  });

  it('should edit a todo', function () {
    var res = todoService.editTodo(0, 'Changed it', todos);
    expect(res.length).toEqual(1);
    expect(res[0].text).toEqual('Changed it');
  });

  it('should complete all todos', function () {
    var res = todoService.addTodo('Hello', todos);
    res = todoService.completeAll(res);
    res.forEach(function (todo) {
      expect(todo.completed).toEqual(true);
    });
  });

  it('should clear all completed todos', function () {
    var res = todoService.addTodo('Hello', todos);
    res = todoService.completeTodo(0, res);
    res = todoService.clearCompleted(res);
    expect(res.length).toEqual(1);
    expect(res[0].completed).toEqual(false);
  });
});
