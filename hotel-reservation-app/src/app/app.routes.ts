// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RoomSearchComponent } from './room-search/room-search.component';
import { RoomSelectionComponent } from './room-selection/room-selection.component';
import { ReservationConfirmationComponent } from './reservation-confirmation/reservation-confirmation.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'room-search', component: RoomSearchComponent },
  { path: 'room-selection', component: RoomSelectionComponent },
  { path: 'reservation-confirmation', component: ReservationConfirmationComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
];
