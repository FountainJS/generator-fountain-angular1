var todoFilters = require('../constants/TodoFilters');
var todos = require('../todos/todos');

module.exports = {
<% if (modules === 'systemjs') { -%>
  templateUrl: 'app/containers/App.html',
<% } else { -%>
  template: require('./App.html'),
<% } -%>
  controller: App
};

function App() {
  this.todos = [todos.initialTodo];
  this.filter = todoFilters.SHOW_ALL;
}
