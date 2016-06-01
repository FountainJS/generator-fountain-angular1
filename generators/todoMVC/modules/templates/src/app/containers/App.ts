import {SHOW_ALL} from '../constants/TodoFilters';
import {initialTodo, Todo} from '../todos/todos';

class AppController {
  todos: Todo[];
  filter: string;

  constructor() {
    this.todos = [initialTodo];
    this.filter = SHOW_ALL;
  }
}

export const App = {
  templateUrl: 'app/containers/App.html',
  controller: AppController
};
