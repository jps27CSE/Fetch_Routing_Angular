import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  
  private Todos_API_URL = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private http: HttpClient) { }

  getTodo(userID: number): Observable<any>{
    const url = `${this.Todos_API_URL}/${userID}`
    return this.http.get<any>(url)
  }
}
