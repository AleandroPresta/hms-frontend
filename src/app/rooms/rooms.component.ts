import { Component, Input, OnInit } from '@angular/core';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsService } from './rooms.service';
import { Room } from './Room';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { FilterOptions } from '../filter-options/options';

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

  @Input() roomTypeOptions: FilterOptions[] = [
    { name: 'Single', selected: false },
    { name: 'Double', selected: false },
    { name: 'King', selected: false },
    { name: 'Queen', selected: false },
    { name: 'Suite', selected: false },
  ]

  @Input() priceRangeOptions: FilterOptions[] = [
    // Price range options starting from under 25€
    { name: 'Under 25€', selected: false },
    { name: '25€ - 50€', selected: false },
    { name: '50€ - 100€', selected: false },
    { name: '100€ - 200€', selected: false },
    { name: 'Over 200€', selected: false },
  ]

  @Input() ratingOptions: FilterOptions[] = [
    { name: '1 Star', selected: false },
    { name: '2 Stars', selected: false },
    { name: '3 Stars', selected: false },
    { name: '4 Stars', selected: false },
    { name: '5 Stars', selected: false },
  ]

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
