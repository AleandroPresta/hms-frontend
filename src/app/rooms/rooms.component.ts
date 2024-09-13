import { Component, Input, OnInit } from '@angular/core';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsService } from './rooms.service';
import { Room } from './Room';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { FilterOptions } from '../filter-options/options';
import { NgFor } from '@angular/common';
import { Page } from './Page';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RoomsListComponent, HeaderComponent, SidebarComponent, NgFor],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {

  constructor(private roomsService: RoomsService) { }

  roomList: Room[] = [];
  currentPageNo: number = 1;
  pageSize: number = 10;

  numTotalPages: number = 0;

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

  pages: Page[] = [

  ]

  ngOnInit() {
    console.log('RoomsComponent initialized');
    this.roomsService.getNumPages(this.pageSize).subscribe(numPages => this.numTotalPages = numPages);

    // populate the pages array
    for (let i = 1; i <= this.numTotalPages; i++) {
      this.pages.push({ pageNo: i, pageSize: this.pageSize });
    }

    this.roomsService.getRooms(this.currentPageNo, this.pageSize).subscribe(rooms => this.roomList = rooms);
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

  changePage(pageNo: number) {
    this.currentPageNo = pageNo;
    console.log(`Changing page to ${pageNo} with page size ${this.pageSize}`);
    this.roomsService.getRooms(pageNo, this.pageSize).subscribe(rooms => this.roomList = rooms);
  }

  changeToNextPage(currentPageNo: number) {
    // Check if there is a next page
    if (currentPageNo < this.numTotalPages) {
      this.changePage(currentPageNo + 1);
    }
  }

  changeToPreviousPage(currentPageNo: number) {
    // Check if there is a previous page
    if (currentPageNo > 1) {
      this.changePage(currentPageNo - 1);
    }
  }

}
