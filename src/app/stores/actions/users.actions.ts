import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Iuser } from 'src/app/models/user.model';

export const fetchUsersStart = createAction('[Users/fetchUsersStart]');
export const fetchUsersSuccess = createAction('[Users/fetchUsersSuccess]',props<{response:Iuser[]}>())
export const fetchUsersError = createAction('[Users/fetchUsersError]',props<{error:HttpErrorResponse}>())
