import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FilterOptionsComponent } from '../filter-options/filter-options.component';
import { FilterOptions } from '../filter-options/options';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    FilterOptionsComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Input() roomTypeOptions: FilterOptions[] = []

  @Input() priceRangeOptions: FilterOptions[] = []

  @Input() ratingOptions: FilterOptions[] = []

  @Output() outRoomTypeOptions: EventEmitter<FilterOptions[]> = new EventEmitter<FilterOptions[]>();

  applyRoomTypeFilters(filterOptions: FilterOptions[]) {
    this.outRoomTypeOptions.emit(filterOptions)
  }

}

