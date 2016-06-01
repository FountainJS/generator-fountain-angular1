var todoFilters = require('../constants/TodoFilters');
var todos = require('../todos/todos');

module.exports = {
  templateUrl: 'app/containers/App.html',
  controller: App
};

function App() {
  this.todos = [todos.initialTodo];
  this.filter = todoFilters.SHOW_ALL;
}
