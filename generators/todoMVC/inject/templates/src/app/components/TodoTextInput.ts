class TodoTextInput {
  editing: boolean;
  text: string;
  newTodo: boolean;
  onSave: Function;

  /** @ngInject */
  constructor(public todoService: TodoService, public $window: any, public $timeout: any) {
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

  handleSubmit(e: any) {
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
