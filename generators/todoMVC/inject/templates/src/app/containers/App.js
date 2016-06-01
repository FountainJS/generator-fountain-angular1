angular
  .module('app')
  .component('app', {
    templateUrl: 'app/containers/App.html',
    controller: App
  });

function App() {
  this.todos = [initialTodo];
  this.filter = SHOW_ALL;
}
