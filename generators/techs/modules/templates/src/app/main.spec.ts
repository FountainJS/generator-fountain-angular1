import * as angular from 'angular';
import 'angular-mocks';
import {main} from './main';

describe('main component', () => {
  beforeEach(() => {
    angular
      .module('app', ['<%- templateUrl %>'])
      .component('app', main);
    <%- modules !== 'systemjs' ? 'angular.mock.' : '' %>module('app');
  });

  it('should render the header, title, techs and footer', <%- modules !== 'systemjs' ? 'angular.mock.' : '' %>inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<app></app>')($rootScope);
    $rootScope.$digest();
    expect(element.find('fountain-header').length).toEqual(1);
    expect(element.find('fountain-title').length).toEqual(1);
    expect(element.find('fountain-techs').length).toEqual(1);
    expect(element.find('fountain-footer').length).toEqual(1);
  }));
});
