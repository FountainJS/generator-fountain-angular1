class TodoItemController {
  editing: boolean = false;
  onSave: Function;
  onDestroy: Function;
  todo: any;

  handleDoubleClick() {
    this.editing = true;
  }

  handleSave(text: string) {
    this.onSave({
      todo: {
        text,
        id: this.todo.id
      }
    });
    this.editing = false;
  }

  handleDestroy(id: number) {
    this.onDestroy({id});
  }
}

export const TodoItem = {
  templateUrl: 'app/components/TodoItem.html',
  controller: TodoItemController,
  bindings: {
    todo: '<',
    onDestroy: '&',
    onChange: '&',
    onSave: '&'
  }
};
