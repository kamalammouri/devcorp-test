import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, timeout } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  fetchProfileError,
  fetchProfileSuccess,
  fetchProfileStart,
} from '../actions/profile.actions';
import { UsersService } from 'src/app/services/users.service';
@Injectable()
export class ProfileEffects {
  constructor(private actions$: Actions, private usersService: UsersService) {}

  loadprofile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchProfileStart),
      switchMap(({ login }) => this.usersService.getProfile(login)),
      map((response) => fetchProfileSuccess({ response })),
      catchError((error) => of(fetchProfileError({ error })))
    )
  );
}
