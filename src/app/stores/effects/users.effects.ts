
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usersActions from '../actions/users.actions';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
@Injectable()
export class UsersEffects {
  constructor(private usersService: UsersService, private action$: Actions) {}

  fetchUsers$ = createEffect(() =>
    this.action$.pipe(
      ofType(usersActions.fetchUsersStart),
      switchMap(() => this.usersService.getUsers$
      .pipe(
        map((response) => usersActions.fetchUsersSuccess({ response })),
        catchError((error) => of(usersActions.fetchUsersError(error)))
      )),

    )
  );
}
