import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Ifollower } from 'src/app/models/follower.model';

export const fetchFollowerStart = createAction('[Follower/fetchFollower]', props<{ login: string }>());
export const fetchFollowerSuccess = createAction('[Follower/fetchFollowerSuccess]',props<{response:Ifollower[]}>())
export const fetchFollowerError = createAction('[Follower/fetchFollowerError]',props<{error:HttpErrorResponse}>())

