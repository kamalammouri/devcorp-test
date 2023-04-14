import { createReducer, on } from '@ngrx/store';
import * as profileActions from '../actions/profile.actions'
import { ProfileState } from '../states/profile.state';

export const initialState: ProfileState = {
  response: undefined,
  isLoading: false,
  error: undefined,
};

export const profileReducer = createReducer(
  initialState,
  on(profileActions.fetshProfile, (state) => ({ ...state, isLoading: true, error: undefined })),
  on(profileActions.fetshProfileSuccess, (state, { response }) => ({ ...state, response, isLoading: false })),
  on(profileActions.fetshProfileError, (state, { error }) => ({ ...state, error, isLoading: false })),
);
