var angular = require('angular');
require('todomvc-app-css/index.css<%- modules === 'systemjs' ? '!' : '' %>');

var todos = require('./app/todos/todos');
var App = require('./app/containers/App');
var Header = require('./app/components/Header');
var MainSection = require('./app/components/MainSection');
var TodoTextInput = require('./app/components/TodoTextInput');
var TodoItem = require('./app/components/TodoItem');
var Footer = require('./app/components/Footer');
<% if (router === 'uirouter') { -%>
require('angular-ui-router');
var routesConfig = require('./routes');
<% } -%>

import './index.<%- css %>';

angular
<% if (router === 'uirouter') { -%>
  .module('app', ['ui.router'])
  .config(routesConfig)
<% } else { -%>
  .module('app', [])
<% } -%>
  .service('todoService', todos.TodoService)
  .component('app', App)
  .component('headerComponent', Header)
  .component('footerComponent', Footer)
  .component('mainSection', MainSection)
  .component('todoTextInput', TodoTextInput)
  .component('todoItem', TodoItem);
