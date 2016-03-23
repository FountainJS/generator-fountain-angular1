/// <reference path="../../typings/main.d.ts" />

import * as angular from 'angular';
import 'angular-mocks';
import {footer} from './footer';

describe('footer component', function () {
  beforeEach(function () {
    angular
      .module('fountainFooter', ['<%- templateUrl %>'])
      .component('fountainFooter', footer);
    <%- modules !== 'systemjs' ? 'angular.mock.' : 'angular.' %>module('fountainFooter');
  });

  it('should render \'FountainJS team\'', <%- modules !== 'systemjs' ? 'angular.mock.' : '' %>inject(function ($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) {
    const element = $compile('<fountain-footer></fountain-footer>')($rootScope);
    $rootScope.$digest();
    const footer = element.find('a');
    expect(footer.html().trim()).toEqual('\'FountainJS team');
  }));
});
