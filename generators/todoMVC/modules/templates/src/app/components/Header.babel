class HeaderController {
  /** @ngInject */
  constructor(todoService) {
    this.todoService = todoService;
  }

  handleSave(text) {
    if (text.length !== 0) {
      this.todos = this.todoService.addTodo(text, this.todos);
    }
  }
}

export const Header = {
  templateUrl: 'app/components/Header.html',
  controller: HeaderController,
  bindings: {
    todos: '='
  }
};
