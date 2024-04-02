import { Routes } from '@angular/router';
import { IndiUsersComponent } from './indi-users/indi-users.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserTodoComponent } from './user-todo/user-todo.component';
import { EditUserComponent } from './edit-user/edit-user.component';

export const routes: Routes = [
    { path: '', component: UserCardComponent },
    { path: 'user/:id', component: IndiUsersComponent },
    {
        path:'user/todo/:id', component: UserTodoComponent
    },
    {
        path:'user/edit/:id', component:EditUserComponent
    }
];
