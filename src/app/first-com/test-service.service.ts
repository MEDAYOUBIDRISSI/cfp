import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  private baseURL="https://jsonplaceholder.typicode.com/todos";

  constructor(private httpClient: HttpClient) { } 

  getTodos(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.baseURL}`);
  }

}
