import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomPageComponent } from './rooms/room-page/room-page.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { ModifyRoomComponent } from './modify-room/modify-room.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'room', component: RoomsComponent },
    { path: 'room/:id', component: RoomPageComponent },
    { path: 'room/:id/modify-room', component: ModifyRoomComponent },
    { path: 'add-room', component: CreateRoomComponent },
    { path: '**', redirectTo: 'home' }
];
