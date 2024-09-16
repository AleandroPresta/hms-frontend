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

  roomIdToDelete: number | undefined;

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

  setRoomToDelete(id: number | undefined) {
    if (!id) return; // id is undefined
    this.roomIdToDelete = id;
    console.log(`Room with id ${id} set to be deleted`);
  }

  removeRoom(id: number | undefined) {
    console.log(`Room with id ${id} deleted`);
    if (!id) return; // id is undefined
    this.roomsService.deleteRoom(id).subscribe(() => {
      console.log(`Room with id ${id} deleted`);
      this.roomList = this.roomList.filter(r => r.id !== id);
    });
    // Reload the page
    window.location.reload();
  }

}
