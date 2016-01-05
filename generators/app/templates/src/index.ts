/// <reference path="../typings/tsd.d.ts" />

<% if (modules !== 'inject') { -%>
import * as angular from 'angular';

import { hello } from './app/hello.component';

<% if (modules === 'webpack') { -%>
import './index.scss';

<% } -%>
export const app: string = 'app';

angular
  .module(app, [])
  .component('hello', hello);
<% } else { -%>
angular
  .module('app', []);
<% } -%>
