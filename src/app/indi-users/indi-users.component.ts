import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-indi-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './indi-users.component.html',
  styleUrl: './indi-users.component.css'
})
export class IndiUsersComponent {
  user: any;

  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = +params['id'];
      this.userService.getUser(userId).subscribe(user => {
        this.user = user;
      });
    });
  }
}
