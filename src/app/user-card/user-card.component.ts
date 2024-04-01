import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent implements OnInit {
   users: any[] =[];

   constructor(private userService: UsersService){}

   ngOnInit(): void {
       this.userService.getUsers()
       .subscribe(users=>{
        this.users = users;
        console.log(this.users)
       })
   }

}
