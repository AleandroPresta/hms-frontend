import { Component, Input } from '@angular/core';
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

  toggleRoomType(i: number) {
    // Toggle the option selected state
    this.roomTypeOptions[i].selected = !this.roomTypeOptions[i].selected
    console.log(this.roomTypeOptions)
  }

  togglePriceRange(i: number) {
    // Toggle the option selected state
    this.priceRangeOptions[i].selected = !this.priceRangeOptions[i].selected
    console.log(this.priceRangeOptions)
  }

  toggleRating(i: number) {
    // Toggle the option selected state
    this.ratingOptions[i].selected = !this.ratingOptions[i].selected
    console.log(this.ratingOptions)
  }

}
