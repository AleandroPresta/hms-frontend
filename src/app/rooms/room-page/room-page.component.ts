import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-page',
  standalone: true,
  imports: [],
  templateUrl: './room-page.component.html',
  styleUrl: './room-page.component.css'
})
export class RoomPageComponent implements OnInit {
  id?: number;

  constructor() { }

  ngOnInit(): void {
    console.log('RoomPageComponent initialized');
  }
}
