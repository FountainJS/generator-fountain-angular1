class MainSection {
  /** @ngInject */
  constructor(todoService) {
    this.todoService = todoService;
    this.selectedFilter = visibilityFilters[this.filter];
    this.completeReducer = (count, todo) => todo.completed ? count + 1 : count;
  }

  handleClearCompleted() {
    this.todos = this.todoService.clearCompleted(this.todos);
  }

  handleCompleteAll() {
    this.todos = this.todoService.completeAll(this.todos);
  }

  handleShow(filter) {
    this.filter = filter;
    this.selectedFilter = visibilityFilters[filter];
  }

  handleChange(id) {
    this.todos = this.todoService.completeTodo(id, this.todos);
  }

  handleSave(e) {
    if (e.text.length === 0) {
      this.todos = this.todoService.deleteTodo(e.id, this.todos);
    } else {
      this.todos = this.todoService.editTodo(e.id, e.text, this.todos);
    }
  }

  handleDestroy(e) {
    this.todos = this.todoService.deleteTodo(e, this.todos);
  }
}

angular
  .module('app')
  .component('mainSection', {
    templateUrl: 'app/components/MainSection.html',
    controller: MainSection,
    bindings: {
      todos: '=',
      filter: '<'
    }
  });
