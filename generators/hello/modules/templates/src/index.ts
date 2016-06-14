/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';

import {hello} from './app/hello';
<% if (router === 'uirouter') { -%>
import 'angular-ui-router';
import routesConfig from './routes';
<% } -%>

<% if (modules === 'webpack') { -%>
import './index.<%- css %>';

<% } -%>
export const app: string = 'app';

angular
<% if (router === 'uirouter') { -%>
  .module(app, ['ui.router'])
  .config(routesConfig)
<% } else { -%>
  .module(app, [])
<% } -%>
  .component('app', hello);
