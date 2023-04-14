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
  on(profileActions.fetchProfileStart, (state) => ({ ...state, isLoading: true, error: undefined })),
  on(profileActions.fetchProfileSuccess, (state, { response }) => ({ ...state,response : response , isLoading: false , error: undefined})),
  on(profileActions.fetchProfileError, (state, { error }) => ({ ...state, isLoading: false, error: error })),
);
