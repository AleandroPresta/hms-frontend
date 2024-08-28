import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from './Room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) { }

  BASE_URL = 'http://127.0.0.1:8080/api/v1/room';

  getRooms() {
    return this.http.get<Room[]>(`${this.BASE_URL}/all`);
  }

  getRoom(id: number) {
    return this.http.get<Room>(`${this.BASE_URL}/${id}`);
  }

  postRoom(newRoom: Room) {
    return this.http.post<Room>(`${this.BASE_URL}`, newRoom);
  }

  putRoom(updatedRoom: Room) {
    const id = updatedRoom.id;
    return this.http.put<Room>(`${this.BASE_URL}/${id}/update`, updatedRoom);
  }

  deleteRoom(id: number) {
    return this.http.delete(`${this.BASE_URL}/${id}/delete`);
  }
}
