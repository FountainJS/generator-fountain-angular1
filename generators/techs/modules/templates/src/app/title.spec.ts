import * as angular from 'angular';
import 'angular-mocks';
import {title} from './title';

describe('title component', () => {
  beforeEach(() => {
    angular
      .module('fountainTitle', ['<%- templateUrl %>'])
      .component('fountainTitle', title);
    <%- modules !== 'systemjs' ? 'angular.mock.' : '' %>module('fountainTitle');
  });

  it('should render \'Allo, \'Allo!', <%- modules !== 'systemjs' ? 'angular.mock.' : '' %>inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<fountain-title></fountain-title>')($rootScope);
    $rootScope.$digest();
    const title = element.find('h1');
    expect(title.html().trim()).toEqual('\'Allo, \'Allo!');
  }));
});
