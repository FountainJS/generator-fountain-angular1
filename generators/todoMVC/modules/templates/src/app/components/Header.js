module.exports = {
  templateUrl: 'app/components/Header.html',
<% if (modules === 'systemjs') { -%>
  controller: ['todoService', Header],
<% } else { -%>
  controller: Header,
<% } -%>
  bindings: {
    todos: '='
  }
};

/** @ngInject */
function Header(todoService) {
  this.todoService = todoService;
}

Header.prototype = {
  handleSave: function (text) {
    this.todos = this.todoService.addTodo(text, this.todos);
  }
};
