import { Iprofile } from './../models/profile.model';
import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export const fetshProfile = createAction('[Profile/fetshProfile]', props<{ login: string }>());
export const fetshProfileSuccess = createAction('[Profile/fetshProfileSuccess]',props<{response:Iprofile}>())
export const fetshProfileError = createAction('[Profile/fetshProfileError]',props<{error:HttpErrorResponse}>())

