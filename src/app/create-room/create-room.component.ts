import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Room } from '../rooms/Room';
import { NgIf } from '@angular/common';
import { RoomsService } from '../rooms/rooms.service';
import { error } from 'console';

@Component({
  selector: 'app-create-room',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './create-room.component.html',
  styleUrl: './create-room.component.css'
})
export class CreateRoomComponent {

  room: Room = {
    type: 'SINGLE',
    price: 0,
    rating: 0,
    available: true
  }

  successMessage: string = '';

  errorMessage: string = '';

  constructor(private roomsService: RoomsService) { }

  submitForm(roomsForm: NgForm) {
    this.roomsService.postRoom(this.room).subscribe(
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
    );
  }
}
