import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Iuser } from 'src/app/models/user.model';

export const fetshUsersStart = createAction('[Users/fetshUsersStart]');
export const fetshUsersSuccess = createAction('[Users/fetshUsersSuccess]',props<{response:Iuser[]}>())
export const fetshUsersError = createAction('[Users/fetshUsersError]',props<{error:HttpErrorResponse}>())
