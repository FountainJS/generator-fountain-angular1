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

export const Header: angular.IComponentOptions = {
<% if (modules === 'systemjs') { -%>
  templateUrl: 'app/components/Header.html',
  controller: ['todoService', HeaderController],
<% } else { -%>
  template: require('./Header.html'),
  controller: HeaderController,
<% } -%>
  bindings: {
    todos: '='
  }
};
