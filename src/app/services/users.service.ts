import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of, shareReplay, takeWhile } from 'rxjs';
import { Iuser } from '../models/user.model';
import { Iprofile } from '../models/profile.model';
import { Irepo } from '../models/repo.model';
import { Ifollower } from '../models/follower.model';
import { IstateRepo } from '../models/state-repo.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = 'https://api.github.com';
  login$ = new BehaviorSubject<string | undefined>(undefined);
  constructor(private http: HttpClient) { }
  getUsers$: Observable<Iuser[]> = this.http.get<Iuser[]>(`${this.apiUrl}/users`)//.pipe(takeWhile(data => !!data,true),shareReplay(1))

  getProfile(login:string):Observable<Iprofile> {
    return this.http.get<Iprofile>(`${this.apiUrl}/users/${login}`);
  }

  getUserRepos(login: string) :Observable<Irepo[]>{
    return this.http.get<Irepo[]>(`${this.apiUrl}/users/${login}/repos`);
  }

  getUserFollowers(login: string): Observable<Ifollower[]> {
    return this.http.get<Ifollower[]>(`${this.apiUrl}/users/${login}/followers`);
  }

  getStateRepo(login: string | undefined, repoName: string) : Observable<IstateRepo> {
    return this.http.get<IstateRepo>(`${this.apiUrl}/repos/${login}/${repoName}`);
  }
  getStateFromUrl(link: string) : Observable<any> {
    console.log(link)
    return this.http.get<any>(link).pipe(
      map((data:any) => ({ count : data.length, data: data })),
      catchError((error:HttpErrorResponse) => of(error))
    );
  }
}
