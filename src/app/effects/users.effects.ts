import { Iuser } from './../models/user.model';
import { Injectable } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usersActions from '../actions/users.actions';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
@Injectable()
export class UsersEffects {
  constructor(private usersService: UsersService, private action$: Actions) {}

  fetchUsers$ = createEffect(() =>
    this.action$.pipe(
      ofType(usersActions.fetshUsersStart),
      exhaustMap(() => {
        return this.usersService.getUsers$.pipe(
          map((response) => usersActions.fetshUsersSuccess({ response })),
          catchError((error) => of(usersActions.fetshUsersError(error)))
        );
      })
    )
  );

  afterFetchUsers$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(usersActions.fetshUsersSuccess),
        tap((response) => console.log(response))
      ),
    { dispatch: false }
  );
}
