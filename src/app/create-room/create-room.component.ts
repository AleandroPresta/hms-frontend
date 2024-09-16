import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Room } from '../rooms/Room';

@Component({
  selector: 'app-create-room',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-room.component.html',
  styleUrl: './create-room.component.css'
})
export class CreateRoomComponent {

  room: Room = {
    type: '',
    price: 0,
    rating: 0,
    available: true
  }

  submitForm() {
    console.log('Form submitted');
    console.log(this.room);
  }
}
