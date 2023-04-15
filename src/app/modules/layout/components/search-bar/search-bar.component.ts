import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, debounceTime, distinctUntilChanged, filter, map } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  search$ = new BehaviorSubject<string | undefined>('');
  constructor(private userService: UsersService,private router: Router){}

  ngOnInit(): void {
    this.userService.login$.pipe(map(login => login ? login : '')).subscribe((login:string) => this.search$.next(login));
    this.search$.pipe(
      filter((search:any) => search),
      distinctUntilChanged(),
      debounceTime(1000),
    ).subscribe(login => this.router.navigate(['/profile',login]));
  }

  searchChanged(value: string){
    this.search$.next(value);
  }

}
