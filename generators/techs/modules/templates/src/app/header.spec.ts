import * as angular from 'angular';
import 'angular-mocks';
import {header} from './header';

describe('header component', () => {
  beforeEach(() => {
    angular
      .module('fountainHeader', ['<%- templateUrl %>'])
      .component('fountainHeader', header);
    <%- modules !== 'systemjs' ? 'angular.mock.' : '' %>module('fountainHeader');
  });

  it('should render \'Fountain Generator\'', <%- modules !== 'systemjs' ? 'angular.mock.' : '' %>inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<fountain-header></fountain-header>')($rootScope);
    $rootScope.$digest();
    const header = element.find('a');
    expect(header.html().trim()).toEqual('Fountain Generator');
  }));
});
