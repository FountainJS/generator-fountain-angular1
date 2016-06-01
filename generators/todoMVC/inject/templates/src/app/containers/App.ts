class App {
  todos: Todo[];
  filter: string;

  constructor() {
    this.todos = [initialTodo];
    this.filter = SHOW_ALL;
  }
}

angular
  .module('app')
  .component('app', {
    templateUrl: 'app/containers/App.html',
    controller: App
  });
