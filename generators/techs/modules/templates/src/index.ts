/// <reference path="../typings/main.d.ts" />

import * as angular from 'angular';

import {techsModule} from './app/techs/index';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

import './index.<%- css %>';

angular
  .module('app', [techsModule])
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);
<% if (modules === 'systemjs') { -%>

angular.bootstrap(document, ['app']);
<% } -%>