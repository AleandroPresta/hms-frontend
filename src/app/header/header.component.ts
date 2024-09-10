import { Component, Input } from '@angular/core';
import { MdSidebarComponent } from '../md-sidebar/md-sidebar.component';
import { FilterOptions } from '../filter-options/options';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MdSidebarComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() roomTypeOptions: FilterOptions[] = []

  @Input() priceRangeOptions: FilterOptions[] = []

}
