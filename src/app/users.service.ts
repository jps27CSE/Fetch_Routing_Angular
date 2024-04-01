import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private User_API_URL = 'https://jsonplaceholder.typicode.com/users';

  
  constructor(private http: HttpClient) { }

  getUsers():Observable<any[]>{
    return this.http.get<any[]>(this.User_API_URL);
  }

  getUser(userId: number): Observable<any> {
    const url = `${this.User_API_URL}/${userId}`;
    return this.http.get<any>(url);
  }

}
