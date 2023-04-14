import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay, takeWhile } from 'rxjs';
import { Iuser } from '../models/user.model';
import { Iprofile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getUsers$: Observable<Iuser[]> = this.http.get<Iuser[]>('https://api.github.com/users').pipe(takeWhile(data => !!data,true),shareReplay(1))

  getProfile(login:string):Observable<Iprofile> {
    return this.http.get<Iprofile>(`https://api.github.com/users/${login}`)
  }
}
