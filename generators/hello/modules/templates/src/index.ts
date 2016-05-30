/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';

import {hello} from './app/hello';

<% if (modules === 'webpack') { -%>
import './index.<%- css %>';

<% } -%>
export const app: string = 'app';

angular
  .module(app, [])
  .component('app', hello);
<% if (modules === 'systemjs') { -%>

angular.bootstrap(document, ['app']);
<% } -%>