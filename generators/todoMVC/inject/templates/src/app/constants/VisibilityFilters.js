var todoFilters = require('./TodoFilters');

function showAll() {
  return true;
}

function showCompleted(todo) {
  return todo.completed;
}

function showActive(todo) {
  return !todo.completed;
}

var visibilityFilters = {
};
visibilityFilters[SHOW_ALL] = {filter: showAll, type: SHOW_ALL};
visibilityFilters[SHOW_COMPLETED] = {filter: showCompleted, type: SHOW_COMPLETED};
visibilityFilters[SHOW_ACTIVE] = {filter: showActive, type: SHOW_ACTIVE};
