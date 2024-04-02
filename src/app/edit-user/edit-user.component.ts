import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {
  userId!: number
  user: any = {}

  constructor(private route:ActivatedRoute,private router:Router,private userService: UsersService){}
  
  ngOnInit(): void {
      this.route.params.subscribe(params=>{
        this.userId = +params['id']
        this.userService.getUser(this.userId).subscribe(user=>{
          this.user=user  
        })
      })
  }

  updateUser(){
    this.userService.updateUser(this.userId,this.user).subscribe(updatedUser=>{
      console.log('User Updated',updatedUser)

      this.router.navigate(['/user',this.userId])

    })
  }

  goBack() {
    this.router.navigate(['/user', this.userId]);
  }

}
