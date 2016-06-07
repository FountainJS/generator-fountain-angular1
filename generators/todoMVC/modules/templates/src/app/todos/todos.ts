import {assign} from '../assign';

export class Todo {
  id: number;
  completed: boolean;
  text: string;
}

export const initialTodo: Todo = {
  text: 'Use AngularJS',
  completed: false,
  id: 0
};

export class TodoService {
  addTodo(text: string, todos: Todo[]) {
    return [
      {
        id: (todos.length === 0) ? 0 : todos[0].id + 1,
        completed: false,
        text
      }
    ].concat(todos);
  }

  completeTodo(id: number, todos: Todo[]) {
    return todos.map(todo => {
      return todo.id === id ?
        assign({}, todo, {completed: !todo.completed}) :
        todo;
    });
  }

  deleteTodo(id: number, todos: Todo[]) {
    return todos.filter(todo => todo.id !== id);
  }

  editTodo(id: number, text: string, todos: Todo[]) {
    return todos.map(todo => {
      return todo.id === id ?
        assign({}, todo, {text}) :
        todo;
    });
  }

  completeAll(todos: Todo[]) {
    const areAllMarked = todos.every(todo => todo.completed);
    return todos.map(todo => assign({}, todo, {completed: !areAllMarked}));
  }

  clearCompleted(todos: Todo[]) {
    return todos.filter(todo => {
      return todo.completed === false;
    });
  }
}

