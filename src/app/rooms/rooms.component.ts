import { Component, OnInit } from '@angular/core';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsService } from './rooms.service';
import { Room } from './Room';
import { HeaderComponent } from '../header/header.component';
import { MdSidebarComponent } from '../md-sidebar/md-sidebar.component';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RoomsListComponent, HeaderComponent, SidebarComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {

  constructor(private roomsService: RoomsService) { }

  roomList: Room[] = [];

  ngOnInit() {
    console.log('RoomsComponent initialized');
    this.roomsService.getRooms().subscribe(rooms => this.roomList = rooms);
  }

  createRoom() {
    const newRoom = {
      type: "single",
      price: 100,
      rating: 5,
      available: true,
    }

    this.roomsService.postRoom(newRoom).subscribe(room => {
      this.roomList.push(room);
    });
  }

}
