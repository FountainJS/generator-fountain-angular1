angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function () { // eslint-disable-line babel/object-shorthand
      this.hello = 'Hello World!';
    }
  });
