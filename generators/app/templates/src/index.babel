<% if (modules !== 'inject') { -%>
import angular from 'angular';

import { hello } from './app/hello.component';

<% if (modules === 'webpack') { -%>
import './index.scss';

<% } -%>
export const app = 'app';

angular
  .module(app, [])
  .component('hello', hello);
<% } else { -%>
angular
  .module('app', []);
<% } -%>
