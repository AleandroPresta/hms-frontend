import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from './Room';
import { Observable } from 'rxjs';
import { FilterOptions } from '../filter-options/options';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) { }

  BASE_URL = 'http://127.0.0.1:8080/api/v1/rooms';

  getRooms(
    pageNo: number,
    pageSize: number,
    roomTypeOptions: FilterOptions[],
    priceRangeOptions: FilterOptions[],
    ratingOptions: FilterOptions[]
  ): Observable<Room[]> {
    // Manage errpr handling in the component
    try {
      const url = `${this.BASE_URL}/search`;
      const filter = `?pageNo=${pageNo}&pageSize=${pageSize}`;
      const fullUrl = url + filter;

      return this.http.get<Room[]>(fullUrl);
    } catch (error) {
      console.error(error);
      return new Observable<Room[]>();
    }
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

  getNumPages(pageSize: number) {
    return this.http.get<number>(`${this.BASE_URL}/countPages?pageSize=${pageSize}`);
  }
}
