import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { fetchStateError, fetchStateStart, fetchStateSuccess } from '../actions/state.actions';
import { IstateRepo } from 'src/app/models/state-repo.model';
@Injectable()
export class StateRepoEffects {
  constructor(private actions$: Actions, private usersService: UsersService) {}

  loadStateRepo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchStateStart),
      switchMap(({ login , repoName }) => this.usersService.getStateRepo(login,repoName)
      .pipe(
        map((response:IstateRepo) => fetchStateSuccess({ response })),
        catchError((error) => of(fetchStateError({ error })))
      )),

    )
  );
}
