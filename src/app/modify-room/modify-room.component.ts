import { Component } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { Room } from '../rooms/Room';
import { ActivatedRoute } from '@angular/router';
import { RoomsService } from '../rooms/rooms.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-modify-room',
  standalone: true,
  imports: [AsyncPipe, NgIf, FormsModule],
  templateUrl: './modify-room.component.html',
  styleUrl: './modify-room.component.css'
})
export class ModifyRoomComponent {

  id$: Observable<number>;
  room: Room = {
    type: 'SINGLE',
    price: 0,
    rating: 0,
    available: true
  };

  successMessage: string = '';

  errorMessage: string = '';

  constructor(private router: ActivatedRoute, private roomsService: RoomsService) {

    this.id$ = this.router.params.pipe(
      map(params => params['id'])
    )

    this.id$.subscribe(id => {
      this.roomsService.getRoom(id).subscribe(
        (data) => {
          this.room = data;
        }
      );
    });
  }

  submitForm(roomsForm: NgForm) {
    this.roomsService.putRoom(this.room).subscribe(
      (data) => {
        this.successMessage = 'Room updated successfully';
        roomsForm.reset();
      },
      (error) => {
        // If the server is down
        if (error.status === 0) {
          this.errorMessage = 'Server is down, please try again later';
        } else {
          this.errorMessage = 'An error occurred, please try again later';
        }
      }
    );
  }

  resetForm(roomsForm: NgForm) {
    roomsForm.reset();
    this.successMessage = '';
    this.errorMessage = '';
  }

}
