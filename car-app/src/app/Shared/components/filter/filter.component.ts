import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterItem } from '../../../Core/Models/filters';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Input() title = 'Filter Items';
  @Input() filters: FilterItem[] = [];
  @Input() activeFilter= '';

  @Output() activeFilterChange = new EventEmitter<string>();

  expandedFilters = new Set<string>();

  toggleFilter(filter: FilterItem) {
    this.activeFilter = filter.name;
    this.activeFilterChange.emit(this.activeFilter);

    if (filter.categoryDto) {
      if (this.expandedFilters.has(filter.id)) {
        this.expandedFilters.delete(filter.id);
      } else {
        this.expandedFilters.add(filter.id);
      }
    }
  }

  isExpanded(filter: FilterItem) {
    return this.expandedFilters.has(filter.id);
  }
}
