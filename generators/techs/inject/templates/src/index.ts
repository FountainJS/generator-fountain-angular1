import * as angular from 'angular';

import './index.<%- css %>';

angular
<% if (router === 'uirouter') { -%>
  .module('app', ['ui.router']);
<% } else { -%>
  .module('app', []);
<% } -%>
