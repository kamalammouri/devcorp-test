import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { fetchFollowerError, fetchFollowerStart, fetchFollowerSuccess } from '../actions/follower.actions';
import { Ifollower } from 'src/app/models/follower.model';
@Injectable()
export class FollowerEffects {
  constructor(private actions$: Actions, private usersService: UsersService) {}

  loadRepo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchFollowerStart),
      switchMap(({ login }) => this.usersService.getUserFollowers(login)),
      map((response:Ifollower[]) => fetchFollowerSuccess({ response })),
      catchError((error) => of(fetchFollowerError({ error })))
    )
  );
}
