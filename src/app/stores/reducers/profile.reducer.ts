import { createReducer, on } from '@ngrx/store';
import * as profileActions from '../actions/profile.actions'
import { ProfileState } from '../states/profile.state';


export const initialState: ProfileState = {
  response: undefined,
  isLoading: undefined,
  error: undefined,
};


export const profileReducer = createReducer(
  initialState,
  on(profileActions.fetchProfileStart, (state) => ({ ...state, isLoading: true, response : undefined, error: undefined })),
  on(profileActions.fetchProfileSuccess, (state, { response }) => ({ ...state , isLoading: false, response : response,  error: undefined})),
  on(profileActions.fetchProfileError, (state, { error }) => ({ ...state, isLoading: false, response : undefined, error: error })),
);
