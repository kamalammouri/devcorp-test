import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { fetchRepoError, fetchRepoStart, fetchRepoSuccess } from '../actions/repo.actions';
import { Irepo } from 'src/app/models/repo.model';
@Injectable()
export class RepoEffects {
  constructor(private actions$: Actions, private usersService: UsersService) {}

  loadRepo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchRepoStart),
      switchMap(({ login }) => this.usersService.getUserRepos(login)
      .pipe(
        map((response:Irepo[]) => fetchRepoSuccess({ response })),
        catchError((error) => of(fetchRepoError({ error })))
      ))
    )
  );
}
