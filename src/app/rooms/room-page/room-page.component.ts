import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Room } from '../Room';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'app-room-page',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './room-page.component.html',
  styleUrl: './room-page.component.css',
})
export class RoomPageComponent {

  id$: Observable<number>;
  room$: Observable<Room>;


  constructor(private router: ActivatedRoute, private roomService: RoomsService) {
    this.id$ = this.router.params.pipe(
      map(params => params['id'])
    );

    this.room$ = this.id$.pipe(
      switchMap(id => this.roomService.getRoom(id))
    );
  }

}