class Footer {
  constructor() {
    this.filters = [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED];
    this.filterTitles = {
      [SHOW_ALL]: 'All',
      [SHOW_ACTIVE]: 'Active',
      [SHOW_COMPLETED]: 'Completed'
    };
  }

  handleClear() {
    this.onClearCompleted();
  }

  handleChange(filter) {
    this.onShow({filter});
  }
}

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
