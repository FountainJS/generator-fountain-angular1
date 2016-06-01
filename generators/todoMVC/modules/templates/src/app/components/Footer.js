var todoFilters = require('../constants/TodoFilters');

module.exports = {
  templateUrl: 'app/components/Footer.html',
  controller: Footer,
  bindings: {
    completedCount: '<',
    activeCount: '<',
    selectedFilter: '<filter',
    onClearCompleted: '&',
    onShow: '&'
  }
};

function Footer() {
  this.filters = [todoFilters.SHOW_ALL, todoFilters.SHOW_ACTIVE, todoFilters.SHOW_COMPLETED];
  this.filterTitles = {};
  this.filterTitles[todoFilters.SHOW_ALL] = 'All';
  this.filterTitles[todoFilters.SHOW_ACTIVE] = 'Active';
  this.filterTitles[todoFilters.SHOW_COMPLETED] = 'Completed';
}

Footer.prototype = {
  handleClear: function () {
    this.onClearCompleted();
  },

  handleChange: function (filter) {
    this.onShow({filter: filter});
  }
};

