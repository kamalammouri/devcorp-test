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
  on(usersAction.fetchUsersStart, (state) => ({
    ...state,
    isLoading: true,
    error: undefined,
  }
  )),
  on(usersAction.fetchUsersSuccess, (state) => ({
    ...state,
    isLoading: false,
    error: undefined,
  })),
  on(usersAction.fetchUsersError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  })),
);

export const isLoading = (state:State) => state.isLoading;
export const error = (state:State) => state.error;

