import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomPageComponent } from './rooms/room-page/room-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'room', component: RoomsComponent },
    { path: 'room/:id', component: RoomPageComponent },
    { path: '**', redirectTo: 'home' }
];
