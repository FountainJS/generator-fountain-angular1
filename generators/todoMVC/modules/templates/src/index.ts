import * as angular from 'angular';
import 'todomvc-app-css/index.css<%- modules === 'systemjs' ? '!' : '' %>';

import {TodoService} from './app/todos/todos';
import {App} from './app/containers/App';
import {Header} from './app/components/Header';
import {MainSection} from './app/components/MainSection';
import {TodoTextInput} from './app/components/TodoTextInput';
import {TodoItem} from './app/components/TodoItem';
import {Footer} from './app/components/Footer';
<% if (router === 'uirouter') { -%>
import 'angular-ui-router';
import routesConfig from './routes';
<% } -%>

import './index.<%- css %>';

angular
<% if (router === 'uirouter') { -%>
  .module('app', ['ui.router'])
<% if (modules === 'systemjs') { -%>
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', routesConfig])
<% } else { -%>
  .config(routesConfig)
<% } -%>
<% } else { -%>
  .module('app', [])
<% } -%>
  .service('todoService', TodoService)
  .component('app', App)
  .component('headerComponent', Header)
  .component('footerComponent', Footer)
  .component('mainSection', MainSection)
  .component('todoTextInput', TodoTextInput)
  .component('todoItem', TodoItem);
