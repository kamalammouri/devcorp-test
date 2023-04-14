import { Iprofile } from '../../models/profile.model';
import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export const fetchProfileStart = createAction('[Profile/fetchProfile]', props<{ login: string }>());
export const fetchProfileSuccess = createAction('[Profile/fetchProfileSuccess]',props<{response:Iprofile}>())
export const fetchProfileError = createAction('[Profile/fetchProfileError]',props<{error:HttpErrorResponse}>())

