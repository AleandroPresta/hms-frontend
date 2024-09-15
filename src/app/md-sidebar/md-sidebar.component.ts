import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterOptionsComponent } from '../filter-options/filter-options.component';
import { FilterOptions } from '../filter-options/options';

@Component({
  selector: 'app-md-sidebar',
  standalone: true,
  imports: [
    FilterOptionsComponent
  ],
  templateUrl: './md-sidebar.component.html',
  styleUrl: './md-sidebar.component.css'
})
export class MdSidebarComponent {

  @Input() roomTypeOptions: FilterOptions[] = []

  @Input() priceRangeOptions: FilterOptions[] = []

  @Input() ratingOptions: FilterOptions[] = []

  @Output() outRoomTypeOptions: EventEmitter<FilterOptions[]> = new EventEmitter<FilterOptions[]>();

  applyRoomTypeFilters(filterOptions: FilterOptions[]) {
    this.outRoomTypeOptions.emit(filterOptions)
  }

}
