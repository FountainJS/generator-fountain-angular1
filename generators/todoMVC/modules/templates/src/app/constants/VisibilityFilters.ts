import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from './TodoFilters';
import {Todo} from '../todos/todos';

function showAll(): boolean {
  return true;
}

function showCompleted(todo: Todo): boolean {
  return todo.completed;
}

function showActive(todo: Todo): boolean {
  return !todo.completed;
}

export default {
  [SHOW_ALL]: {filter: showAll, type: SHOW_ALL},
  [SHOW_COMPLETED]: {filter: showCompleted, type: SHOW_COMPLETED},
  [SHOW_ACTIVE]: {filter: showActive, type: SHOW_ACTIVE}
};
