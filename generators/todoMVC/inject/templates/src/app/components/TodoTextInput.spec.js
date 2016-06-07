describe('TodoTextInput component', function () {
  function MockTodoService() {
  }

  beforeEach(module('app', function ($provide) {
    $provide.factory('todoService', function () {
      return new MockTodoService();
    });
  }));

  beforeEach(module('app', function ($provide) {
    $provide.factory('todoTextInput', function () {
      return {
        templateUrl: 'app/components/TodoTextInput.html'
      };
    });
  }));

  beforeEach(angular.mock.module('app'));

  it('should render correctly', angular.mock.inject(function ($rootScope, $compile) {
    var $scope = $rootScope.$new();
    var element = $compile('<todo-text-input></todo-text-input>')($scope);
    $scope.$digest();
    var textInput = element.find('input');
    expect(textInput.attr('type')).toEqual('text');
  }));

  it('should bind the text to the element', angular.mock.inject(function ($componentController) {
    var bindings = {
      text: 'Hello'
    };
    var component = $componentController('todoTextInput', {}, bindings);
    expect(component.text).toEqual('Hello');
  }));

  it('should call focus on element construction', angular.mock.inject(function ($componentController) {
    var focusSpy = jasmine.createSpy('focusSpy');
    var bindings = {
      text: 'Hello',
      focus: focusSpy
    };
    var component = $componentController('todoTextInput', {}, bindings);
    expect(component.focus).toHaveBeenCalled();
  }));

  it('should not call focus on element construction', angular.mock.inject(function ($componentController) {
    var focusSpy = jasmine.createSpy('focusSpy');
    var bindings = {
      focus: focusSpy
    };
    var component = $componentController('todoTextInput', {}, bindings);
    expect(component.focus).not.toHaveBeenCalled();
  }));

  it('should call onSave', angular.mock.inject(function ($componentController) {
    var bindings = {
      onSave: function () {},
      newTodo: false,
      text: 'Hello'
    };
    var component = $componentController('todoTextInput', {}, bindings);
    spyOn(component, 'onSave').and.callThrough();
    component.handleBlur();
    expect(component.onSave).toHaveBeenCalled();
  }));

  it('should not call onSave', angular.mock.inject(function ($componentController) {
    var bindings = {
      onSave: function () {},
      newTodo: true,
      text: 'Hello'
    };
    var component = $componentController('todoTextInput', {}, bindings);
    spyOn(component, 'onSave').and.callThrough();
    component.handleBlur();
    expect(component.onSave).not.toHaveBeenCalled();
  }));

  it('should call onSave and clear text', angular.mock.inject(function ($componentController) {
    var bindings = {
      onSave: function () {},
      newTodo: true,
      text: 'Hello'
    };
    var component = $componentController('todoTextInput', {}, bindings);
    spyOn(component, 'onSave').and.callThrough();
    component.handleSubmit({keyCode: 13});
    expect(component.onSave).toHaveBeenCalled();
    expect(component.text).toEqual('');
  }));
});
