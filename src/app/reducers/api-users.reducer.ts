import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import * as usersAction from '../actions/users.actions';

export interface State {
  isLoading: boolean | undefined;
  error: HttpErrorResponse | undefined;
}

export const initialState: State = {
  isLoading: undefined,
  error: undefined,
};

export const reducer = createReducer(
  initialState,
  on(usersAction.fetshUsersStart, (state) => {
    return {
      ...state,
      isLoading: true,
      error: undefined,
    };
  }),
  on(usersAction.fetshUsersError, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error: error,
    };
  }),
  on(usersAction.fetshUsersSuccess, (state) => {
    return {
      ...state,
      isLoading: false,
      error: undefined,
    };
  })
);

export const isLoading = (state:State) => state.isLoading;
export const error = (state:State) => state.error;

