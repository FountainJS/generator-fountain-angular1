var visibilityFilters = require('../constants/VisibilityFilters');

module.exports = {
<% if (modules === 'systemjs') { -%>
  templateUrl: 'app/components/MainSection.html',
  controller: ['todoService', MainSection],
<% } else { -%>
  template: require('./MainSection.html'),
  controller: MainSection,
<% } -%>
  bindings: {
    todos: '=',
    filter: '<'
  }
};

/** @ngInject */
function MainSection(todoService) {
  this.todoService = todoService;
  this.selectedFilter = visibilityFilters[this.filter];
  this.completeReducer = function (count, todo) {
    return todo.completed ? count + 1 : count;
  };
}

MainSection.prototype = {
  handleClearCompleted: function () {
    this.todos = this.todoService.clearCompleted(this.todos);
  },

  handleCompleteAll: function () {
    this.todos = this.todoService.completeAll(this.todos);
  },

  handleShow: function (filter) {
    this.filter = filter;
    this.selectedFilter = visibilityFilters[filter];
  },

  handleChange: function (id) {
    this.todos = this.todoService.completeTodo(id, this.todos);
  },

  handleSave: function (e) {
    if (e.text.length === 0) {
      this.todos = this.todoService.deleteTodo(e.id, this.todos);
    } else {
      this.todos = this.todoService.editTodo(e.id, e.text, this.todos);
    }
  },

  handleDestroy: function (e) {
    this.todos = this.todoService.deleteTodo(e, this.todos);
  }
};
