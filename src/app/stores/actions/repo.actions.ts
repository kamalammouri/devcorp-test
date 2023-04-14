import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Irepo } from 'src/app/models/repo.model';

export const fetchRepoStart = createAction('[Repo/fetchRepo]', props<{ login: string }>());
export const fetchRepoSuccess = createAction('[Repo/fetchRepoSuccess]',props<{response:Irepo[]}>())
export const fetchRepoError = createAction('[Repo/fetchRepoError]',props<{error:HttpErrorResponse}>())

