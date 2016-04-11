/// <reference path="../../typings/main.d.ts" />

import * as angular from 'angular';
import 'angular-mocks';
import {main} from './main';

describe('main component', () => {
  beforeEach(() => {
    angular
      .module('app', ['<%- templateUrl %>'])
      .component('app', main);
    <%- modules !== 'systemjs' ? 'angular.mock.' : 'angular.' %>module('app');
  });

  it('should render the header, title, techs and footer', <%- modules !== 'systemjs' ? 'angular.mock.' : '' %>inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<app></app>')($rootScope);
    $rootScope.$digest();
    expect(element.find('fountain-header').length).to.equal(1);
    expect(element.find('fountain-title').length).to.equal(1);
    expect(element.find('fountain-techs').length).to.equal(1);
    expect(element.find('fountain-footer').length).to.equal(1);
  }));
});
