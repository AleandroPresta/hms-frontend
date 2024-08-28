import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from './Room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) { }

  BASE_URL = 'http://localhost:8080/api/v1/room/all';

  getRooms() {
    return this.http.get<Room[]>(this.BASE_URL);
  }
}
