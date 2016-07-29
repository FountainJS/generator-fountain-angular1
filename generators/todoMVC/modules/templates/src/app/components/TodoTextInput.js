module.exports = {
<% if (modules === 'systemjs') { -%>
  templateUrl: 'app/components/TodoTextInput.html',
  controller: ['todoService', '$window', '$timeout', TodoTextInput],
<% } else { -%>
  template: require('./TodoTextInput.html'),
  controller: TodoTextInput,
<% } -%>
  bindings: {
    onSave: '&',
    placeholder: '@',
    newTodo: '@',
    editing: '@',
    text: '<'
  }
};

/** @ngInject */
function TodoTextInput(todoService, $window, $timeout) {
  this.$timeout = $timeout;
  this.$window = $window;
  this.todoService = todoService;
  this.editing = this.editing || false;
  this.text = this.text || '';
  if (this.text.length) {
    this.focus();
  }
}

TodoTextInput.prototype = {
  handleBlur: function () {
    if (!this.newTodo) {
      this.onSave({text: this.text});
    }
  },

  handleSubmit: function (e) {
    if (e.keyCode === 13) {
      this.onSave({text: this.text});
      if (this.newTodo) {
        this.text = '';
      }
    }
  },

  focus: function () {
    this.$timeout(function () {
      var element = this.$window.document.querySelector('.editing .textInput');
      if (element) {
        element.focus();
      }
    }, 0);
  }
};
