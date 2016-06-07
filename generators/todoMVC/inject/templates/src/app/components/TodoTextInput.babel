class TodoTextInput {
  /** @ngInject */
  constructor(todoService, $window, $timeout) {
    this.$timeout = $timeout;
    this.$window = $window;
    this.todoService = todoService;
    this.editing = this.editing || false;
    this.text = this.text || '';
    if (this.text.length) {
      this.focus();
    }
  }

  handleBlur() {
    if (!this.newTodo) {
      this.onSave({text: this.text});
    }
  }

  handleSubmit(e) {
    if (e.keyCode === 13) {
      this.onSave({text: this.text});
      if (this.newTodo) {
        this.text = '';
      }
    }
  }

  focus() {
    this.$timeout(() => {
      const element = this.$window.document.querySelector('.editing .textInput');
      if (element) {
        element.focus();
      }
    }, 0);
  }
}

angular
  .module('app')
  .component('todoTextInput', {
    templateUrl: 'app/components/TodoTextInput.html',
    controller: TodoTextInput,
    bindings: {
      onSave: '&',
      placeholder: '@',
      newTodo: '@',
      editing: '@',
      text: '<'
    }
  });
