import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { UserState, getApiError, getIsLoading, userEntities } from 'src/app/reducers';
import * as usersActions from '../../../../actions/users.actions'
import { Iuser } from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit{
  // usersList$ = this.usersService.getUsers$
  entities$!:Observable<Iuser[]>;
  isLoading$!: Observable<boolean | undefined>;
  apiError$!: Observable<HttpErrorResponse | undefined>;

  constructor(private store:Store<UserState>){
    this.store.dispatch(usersActions.fetshUsersStart())
    this.entities$ = this.store.pipe(select(userEntities))
    this.isLoading$ = this.store.pipe(select(getIsLoading))
    this.apiError$ = this.store.pipe(select(getApiError))
  }
  ngOnInit(): void {}

}
