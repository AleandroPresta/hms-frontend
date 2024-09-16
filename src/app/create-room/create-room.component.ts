import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Room } from '../rooms/Room';
import { NgIf } from '@angular/common';
import { RoomsService } from '../rooms/rooms.service';

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

  constructor(roomsService: RoomsService) { }

  submitForm(roomsForm: NgForm) {

    console.log('Form submitted');
    console.log(this.room);
    this.successMessage = 'Room created successfully';
    roomsForm.reset();
  }
}
