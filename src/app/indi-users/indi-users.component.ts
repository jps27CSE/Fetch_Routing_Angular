import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-indi-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './indi-users.component.html',
  styleUrl: './indi-users.component.css'
})
export class IndiUsersComponent {
  user: any;
  userId!: number;

  constructor(private route: ActivatedRoute, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['id']; 
      this.userService.getUser(this.userId).subscribe(user => {
        this.user = user;
      });
    });
  }

  deleteUser()
  {
    this.userService.deleteUser(this.userId).subscribe(
      ()=>{
        console.log('user deleted successfully')
        this.router.navigate(['/'])
      },
      (error)=>{
        console.error("error deleting user",error)
      }
    )
  }
}
