import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomsService } from '../rooms.service';
import { Room } from '../Room';

@Component({
  selector: 'app-room-page',
  standalone: true,
  imports: [],
  templateUrl: './room-page.component.html',
  styleUrl: './room-page.component.css'
})
export class RoomPageComponent implements OnInit {
  id: number = -1;
  room: Room = {
    id: -1,
    type: '',
    price: 0,
    rating: 0,
    available: false,
  }

  constructor(
    private route: ActivatedRoute,
    private roomsService: RoomsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.roomsService.getRoom(this.id).subscribe(
      (room: Room) => {
        this.room = room;
        console.log('room.available', room.available);
      }
    );
  }
}
