import * as angular from 'angular';

import {techsModule} from './app/techs/index';
<% if (router === 'uirouter') { -%>
import 'angular-ui-router';
import routesConfig from './routes';
<% } -%>

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

import './index.<%- css %>';

angular
<% if (router === 'uirouter') { -%>
  .module('app', [techsModule, 'ui.router'])
<% if (modules === 'systemjs') { -%>
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', routesConfig])
<% } else { -%>
  .config(routesConfig)
<% } -%>
<% } else { -%>
  .module('app', [techsModule])
<% } -%>
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);
