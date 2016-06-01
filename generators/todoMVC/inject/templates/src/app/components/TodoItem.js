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

function TodoItem() {
  this.editing = false;
}

TodoItem.prototype = {
  handleDoubleClick: function () {
    this.editing = true;
  },

  handleSave: function (text) {
    this.onSave({
      todo: {
        text: text,
        id: this.todo.id
      }
    });
    this.editing = false;
  },

  handleDestroy: function (id) {
    this.onDestroy({id: id});
  }
};
