import {TodoService, Todo} from '../todos/todos';

class HeaderController {
  todos: Todo[];

  /** @ngInject */
  constructor(public todoService: TodoService) {
  }

  handleSave(text: string) {
    this.todos = this.todoService.addTodo(text, this.todos);
  }
}

export const Header = {
  templateUrl: 'app/components/Header.html',
  controller: HeaderController,
  bindings: {
    todos: '='
  }
};
