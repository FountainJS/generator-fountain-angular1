import {TodoService, Todo} from '../todos/todos';

class HeaderController {
  todos: Todo[];

<% if (modules === 'webpack') { -%>
  /** @ngInject */
<% } -%>
  constructor(public todoService: TodoService) {
  }

  handleSave(text: string) {
    if (text.length !== 0) {
      this.todos = this.todoService.addTodo(text, this.todos);
    }
  }
}

export const Header = {
  templateUrl: 'app/components/Header.html',
<% if (modules === 'systemjs') { -%>
  controller: ['todoService', HeaderController],
<% } else { -%>
  controller: HeaderController,
<% } -%>
  bindings: {
    todos: '='
  }
};
