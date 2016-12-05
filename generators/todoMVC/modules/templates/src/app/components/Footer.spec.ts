import * as angular from 'angular';
import 'angular-mocks';
import {Footer} from './Footer';

describe('Footer component', () => {
  beforeEach(() => {
    angular
      .module('footerComponent', ['<%- templateUrl %>'])
      .component('footerComponent', Footer);
    <%- modules !== 'systemjs' ? 'angular.mock.' : '' %>module('footerComponent');
  });

  interface IMyScope extends ng.IScope {
    activeCount: number;
  }

  it('should render correctly', <%- modules !== 'systemjs' ? 'angular.mock.' : '' %>inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const $scope: IMyScope = <IMyScope> $rootScope.$new();
    $scope.activeCount = 2;
    const element = $compile('<footer-component active-count="activeCount"></footer-component>')($scope);
    $scope.$digest();
    const footer = element.find('strong');
    expect(footer.html().trim()).toEqual('2');
  }));

  it('shoud call onClearCompleted', <%- modules !== 'systemjs' ? 'angular.mock.' : '' %>inject($componentController => {
    const bindings = {
      onClearCompleted: () => {
        return;
      }
    };
    const component = $componentController('footerComponent', {}, bindings);
    spyOn(component, 'onClearCompleted').and.callThrough();
    component.handleClear();
    expect(component.onClearCompleted).toHaveBeenCalled();
  }));

  it('shoud call onShow', <%- modules !== 'systemjs' ? 'angular.mock.' : '' %>inject($componentController => {
    const bindings = {
      onShow: () => {
        return;
      }
    };
    const component = $componentController('footerComponent', {}, bindings);
    spyOn(component, 'onShow').and.callThrough();
    component.handleChange('show_all');
    expect(component.onShow).toHaveBeenCalledWith({filter: 'show_all'});
  }));
});
