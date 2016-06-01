function showAll() {
  return true;
}

function showCompleted(todo) {
  return todo.completed;
}

function showActive(todo) {
  return !todo.completed;
}

const visibilityFilters = {
  [SHOW_ALL]: {filter: showAll, type: SHOW_ALL},
  [SHOW_COMPLETED]: {filter: showCompleted, type: SHOW_COMPLETED},
  [SHOW_ACTIVE]: {filter: showActive, type: SHOW_ACTIVE}
};
