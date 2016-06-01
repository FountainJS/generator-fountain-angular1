import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/TodoFilters';

class FooterController {
  filters: string[];
  filterTitles: any;
  onClearCompleted: Function;
  onShow: Function;

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

  handleChange(filter: string) {
    this.onShow({filter});
  }
}

export const Footer = {
  templateUrl: 'app/components/Footer.html',
  controller: FooterController,
  bindings: {
    completedCount: '<',
    activeCount: '<',
    selectedFilter: '<filter',
    onClearCompleted: '&',
    onShow: '&'
  }
};
