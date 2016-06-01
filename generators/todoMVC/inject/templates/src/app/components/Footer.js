angular
  .module('app')
  .component('footerComponent', {
    templateUrl: 'app/components/Footer.html',
    controller: Footer,
    bindings: {
      completedCount: '<',
      activeCount: '<',
      selectedFilter: '<filter',
      onClearCompleted: '&',
      onShow: '&'
    }
  });

function Footer() {
  this.filters = [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED];
  this.filterTitles = {};
  this.filterTitles[SHOW_ALL] = 'All';
  this.filterTitles[SHOW_ACTIVE] = 'Active';
  this.filterTitles[SHOW_COMPLETED] = 'Completed';
}

Footer.prototype = {
  handleClear: function () {
    this.onClearCompleted();
  },

  handleChange: function (filter) {
    this.onShow({filter: filter});
  }
};

