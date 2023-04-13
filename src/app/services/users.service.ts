import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay, takeWhile } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getUsers$ = this.http.get('https://api.github.com/users').pipe(takeWhile(data => !!data,true),shareReplay(1))

}
