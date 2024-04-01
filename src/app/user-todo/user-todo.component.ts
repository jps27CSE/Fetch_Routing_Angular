import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-todo',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './user-todo.component.html',
  styleUrl: './user-todo.component.css'
})
export class UserTodoComponent implements OnInit{
  userTodo: any = {}; 

  constructor(private route: ActivatedRoute,private todoService: TodosService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = +params['id'];
      this.todoService.getTodo(userId).subscribe(user => {
        this.userTodo = user;
      });
    });

  }
}
