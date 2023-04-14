import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { IstateRepo } from 'src/app/models/state-repo.model';

export const fetchStateStart = createAction('[State/fetchState]', props<{ login: string | undefined, repoName: string }>());
export const fetchStateSuccess = createAction('[State/fetchStateSuccess]',props<{response:IstateRepo}>())
export const fetchStateError = createAction('[State/fetchRepoError]',props<{error:HttpErrorResponse}>())

