angular
  .module('app')
  .component('headerComponent', {
    templateUrl: 'app/components/Header.html',
<% if (modules === 'systemjs') { -%>
    controller: ['todoService', Header],
<% } else { -%>
    controller: Header,
<% } -%>
    bindings: {
      todos: '='
    }
  });

/** @ngInject */
function Header(todoService) {
  this.todoService = todoService;
}

Header.prototype = {
  handleSave: function (text) {
    if (text.length !== 0) {
      this.todos = this.todoService.addTodo(text, this.todos);
    }
  }
};
