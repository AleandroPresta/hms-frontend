import { Component, Input } from '@angular/core';
import { Room } from '../Room';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css'
})
export class RoomsListComponent {

  @Input() roomList: Room[] = [];

}
