import { UsersService } from './../services/users.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {fetshProfileError,fetshProfileSuccess,fetshProfile } from '../actions/profile.actions'
@Injectable()
export class ProfileEffects {
  loadprofile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetshProfile),
      switchMap(({ login }) =>
        this.usersService.getProfile(login).pipe(
          map((response) => fetshProfileSuccess({ response })),
          catchError((error) => of(fetshProfileError({ error }))),
        )
      )
    )
  );

  constructor(private actions$: Actions,private usersService:UsersService) {}
}
