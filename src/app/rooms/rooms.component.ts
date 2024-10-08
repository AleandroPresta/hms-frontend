import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsService } from './rooms.service';
import { Room } from './Room';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FilterOptions } from '../filter-options/options';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Page } from './Page';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [
    RoomsListComponent,
    HeaderComponent,
    SidebarComponent,
    NgFor,
    NgClass,
  ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent implements OnInit {
  constructor(private roomsService: RoomsService) { }

  roomList: Room[] = [];
  currentPageNo: number = 1;
  pageSize: number = 10;

  numTotalPages: number = 1;

  @Input() roomTypeOptions: FilterOptions[] = [
    { name: 'Single', selected: false },
    { name: 'Double', selected: false },
    { name: 'King', selected: false },
    { name: 'Queen', selected: false },
    { name: 'Suite', selected: false },
  ];

  @Input() priceRangeOptions: FilterOptions[] = [
    // Price range options starting from under 25€
    { name: 'Under 25€', selected: false },
    { name: '25€ - 50€', selected: false },
    { name: '50€ - 100€', selected: false },
    { name: '100€ - 200€', selected: false },
    { name: 'Over 200€', selected: false },
  ];

  @Input() ratingOptions: FilterOptions[] = [
    { name: '1 Star', selected: false },
    { name: '2 Stars', selected: false },
    { name: '3 Stars', selected: false },
    { name: '4 Stars', selected: false },
    { name: '5 Stars', selected: false },
  ];

  pages: Page[] = [];

  ngOnInit() {
    console.log('RoomsComponent initialized');
    this.roomsService
      .getNumPages(
        this.pageSize,
        this.roomTypeOptions,
        this.priceRangeOptions,
        this.ratingOptions
      )
      .subscribe((numPages) => {
        this.numTotalPages = numPages;
        // Populate the pages array with the total number of pages
        for (let i = 1; i <= this.numTotalPages; i++) {
          this.pages.push({ pageNo: i, pageSize: this.pageSize });
        }
      });
    this.roomsService
      .getRooms(
        this.currentPageNo,
        this.pageSize,
        this.roomTypeOptions,
        this.priceRangeOptions,
        this.ratingOptions
      )
      .subscribe((rooms) => (this.roomList = rooms));
  }

  createRoom() {
    const newRoom = {
      type: 'single',
      price: 100,
      rating: 5,
      available: true,
    };

    this.roomsService.postRoom(newRoom).subscribe((room) => {
      this.roomList.push(room);
    });
  }

  changePage(pageNo: number) {
    this.currentPageNo = pageNo;
    console.log(
      `Changing page to ${pageNo} with page size ${this.pageSize}`
    );
    this.roomsService
      .getRooms(
        pageNo,
        this.pageSize,
        this.roomTypeOptions,
        this.priceRangeOptions,
        this.ratingOptions
      )
      .subscribe((rooms) => (this.roomList = rooms));
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

  isCurrentPage(pageNo: number) {
    return pageNo === this.currentPageNo;
  }

  applyRoomTypeFilters(filterOptions: FilterOptions[]) {
    // Reset the paged array
    this.roomList = [];
    this.pages = [];
    // Get the number of pages based on the new filters
    this.roomsService
      .getNumPages(
        this.pageSize,
        this.roomTypeOptions,
        this.priceRangeOptions,
        this.ratingOptions
      )
      .subscribe((numPages) => {
        this.numTotalPages = numPages;
        // Populate the pages array with the total number of pages
        for (let i = 1; i <= this.numTotalPages; i++) {
          this.pages.push({ pageNo: i, pageSize: this.pageSize });
        }
      });
    // Get the rooms based on the new filters
    this.roomsService
      .getRooms(
        this.currentPageNo,
        this.pageSize,
        this.roomTypeOptions,
        this.priceRangeOptions,
        this.ratingOptions
      )
      .subscribe((rooms) => (this.roomList = rooms));
  }
}
