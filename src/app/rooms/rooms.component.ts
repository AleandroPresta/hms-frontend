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
  }

  createRoom() {
    const newRoom = {
      type: "single",
      price: 100,
      rating: 5,
      isAvailable: true,
    }

    this.roomsService.postRoom(newRoom).subscribe(room => {
      this.roomList.push(room);
    });
  }

  editRoom() {
    const updatedRoom = {
      id: 3,
      type: "double",
      price: 100,
      rating: 5,
      isAvailable: false,
    };

    this.roomsService.putRoom(updatedRoom).subscribe(room => {
      const index = this.roomList.findIndex(r => r.id === room.id);
      this.roomList[index] = room;
    });
  }

  removeRoom() {
    const id = 3;

    this.roomsService.deleteRoom(id).subscribe(() => {
      this.roomList = this.roomList.filter(r => r.id !== id);
    });
  }

}
