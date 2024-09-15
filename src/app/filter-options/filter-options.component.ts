import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterOptions } from './options';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-filter-options',
  standalone: true,
  imports: [NgFor],
  templateUrl: './filter-options.component.html',
  styleUrl: './filter-options.component.css'
})
export class FilterOptionsComponent {

  @Input() roomTypeOptions: FilterOptions[] = []

  @Input() priceRangeOptions: FilterOptions[] = []

  @Input() ratingOptions: FilterOptions[] = []

  // Output of the filtering process
  @Output() outRoomTypeOptions: EventEmitter<FilterOptions[]> = new EventEmitter<FilterOptions[]>();
  @Output() outPriceRangeOptions: EventEmitter<FilterOptions[]> = new EventEmitter<FilterOptions[]>();
  @Output() outRatingOptions: EventEmitter<FilterOptions[]> = new EventEmitter<FilterOptions[]>();

  toggleRoomType(i: number) {
    // Toggle the option selected state
    this.roomTypeOptions[i].selected = !this.roomTypeOptions[i].selected
  }

  // Only one price range option can be selected at a time
  togglePriceRange(i: number) {
    // Toggle the option selected state
    this.priceRangeOptions[i].selected = !this.priceRangeOptions[i].selected
    // Unselect all other options
    this.priceRangeOptions.forEach((option, index) => {
      if (index !== i) {
        option.selected = false
      }
    })
  }

  toggleRating(i: number) {
    // Toggle the option selected state
    this.ratingOptions[i].selected = !this.ratingOptions[i].selected
  }

  clearFilters() {
    // Clear all selected options
    this.roomTypeOptions.forEach(option => option.selected = false)
    this.priceRangeOptions.forEach(option => option.selected = false)
    this.ratingOptions.forEach(option => option.selected = false)
  }

  applyFilters() {
    this.outRoomTypeOptions.emit(this.roomTypeOptions)
    this.outPriceRangeOptions.emit(this.priceRangeOptions)
    this.outRatingOptions.emit(this.ratingOptions)
  }


}
