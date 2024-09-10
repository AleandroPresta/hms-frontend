import { Component } from '@angular/core';
import { FilterOptionsComponent } from '../filter-options/filter-options.component';

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

}
