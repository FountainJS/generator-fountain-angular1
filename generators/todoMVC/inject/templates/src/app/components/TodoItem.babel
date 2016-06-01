class TodoItem {
  constructor() {
    this.editing = false;
  }

  handleDoubleClick() {
    this.editing = true;
  }

  handleSave(text) {
    this.onSave({
      todo: {
        text,
        id: this.todo.id
      }
    });
    this.editing = false;
  }

  handleDestroy(id) {
    this.onDestroy({id});
  }
}

angular
  .module('app')
  .component('todoItem', {
    templateUrl: 'app/components/TodoItem.html',
    controller: TodoItem,
    bindings: {
      todo: '<',
      onDestroy: '&',
      onChange: '&',
      onSave: '&'
    }
  });
