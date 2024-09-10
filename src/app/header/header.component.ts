import { Component } from '@angular/core';
import { MdSidebarComponent } from '../md-sidebar/md-sidebar.component';

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

}
