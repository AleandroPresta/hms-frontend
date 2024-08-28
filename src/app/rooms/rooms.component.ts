import { Component, OnInit } from '@angular/core';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsService } from './rooms.service';
import { Room } from './Room';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RoomsListComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {

  constructor(private roomsService: RoomsService) { }

  roomList: Room[] = [];

  ngOnInit() {
    this.roomsService.getRooms().subscribe(rooms => this.roomList = rooms);
    console.log(this.roomList);
  }

}
