import { Component } from '@angular/core';
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

  options: FilterOptions[] = [
    { name: 'Single', selected: false },
    { name: 'Double', selected: false },
    { name: 'King', selected: false },
    { name: 'Queen', selected: false },
    { name: 'Suite', selected: false },
  ]

  filterByType() {
    console.log('Filtering by type');
  }

}
