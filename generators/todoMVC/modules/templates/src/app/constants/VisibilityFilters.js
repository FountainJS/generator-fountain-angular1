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

var filters = {};
filters[todoFilters.SHOW_ALL] = {filter: showAll, type: todoFilters.SHOW_ALL};
filters[todoFilters.SHOW_COMPLETED] = {filter: showCompleted, type: todoFilters.SHOW_COMPLETED};
filters[todoFilters.SHOW_ACTIVE] = {filter: showActive, type: todoFilters.SHOW_ACTIVE};

module.exports = filters;
