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
  room$: Observable<Room>;

  successMessage: string = '';

  errorMessage: string = '';

  constructor(private router: ActivatedRoute, private roomsService: RoomsService) {

    this.id$ = this.router.params.pipe(
      map(params => params['id'])
    )

    this.room$ = this.id$.pipe(
      switchMap(id => this.roomsService.getRoom(id))
    )
  }

  submitForm(roomsForm: NgForm) {
    /*this.roomsService.postRoom(this.room$).subscribe(
      (data) => {
        this.successMessage = 'Room created successfully';
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
    ); */
  }

  resetForm(roomsForm: NgForm) {
    /*roomsForm.reset();
    this.successMessage = '';
    this.errorMessage = ''; */
  }

}
