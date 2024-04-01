import { Routes } from '@angular/router';
import { IndiUsersComponent } from './indi-users/indi-users.component';
import { UserCardComponent } from './user-card/user-card.component';

export const routes: Routes = [
    { path: '', component: UserCardComponent },
    { path: 'user/:id', component: IndiUsersComponent }
];
