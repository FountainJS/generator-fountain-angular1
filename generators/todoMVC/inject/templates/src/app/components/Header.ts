class Header {
  todos: Todo[];

  /** @ngInject */
  constructor(public todoService: TodoService) {
  }

  handleSave(text: string) {
    this.todos = this.todoService.addTodo(text, this.todos);
  }
}

angular
  .module('app')
  .component('headerComponent', {
    templateUrl: 'app/components/Header.html',
    controller: Header,
    bindings: {
      todos: '='
    }
  });
