import { Component, Input } from '@angular/core';
import { Room } from '../Room';
import { NgFor } from '@angular/common';
import { RoomsService } from '../rooms.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css'
})
export class RoomsListComponent {

  @Input() roomList: Room[] = [];

  constructor(private roomsService: RoomsService) { }

  editRoom(room: Room) {
    const updatedRoom = {
      id: room.id,
      type: "double",
      price: 100,
      rating: 5,
      available: false,
    };

    this.roomsService.putRoom(updatedRoom).subscribe(room => {
      const index = this.roomList.findIndex(r => r.id === room.id);
      this.roomList[index] = room;
    });
  }

  removeRoom(id: number | undefined) {
    if (!id) return; // id is undefined
    this.roomsService.deleteRoom(id).subscribe(() => {
      this.roomList = this.roomList.filter(r => r.id !== id);
    });
  }

}
