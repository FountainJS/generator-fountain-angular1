<% if (modules) { -%>
import angular from 'angular';

import { hello } from './app/hello.component';

export const app = 'app';

angular
  .module(app, [])
  .component('hello', hello);
<% } else { -%>
angular
  .module('app', []);
<% } -%>
