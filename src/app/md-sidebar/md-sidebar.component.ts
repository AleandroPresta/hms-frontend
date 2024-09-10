import { Component } from '@angular/core';
import { FilterOptionsComponent } from '../filter-options/filter-options.component';

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

}
