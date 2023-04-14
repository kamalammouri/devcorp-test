import { createReducer, on } from '@ngrx/store';
import * as FollowerActions from '../actions/follower.actions'
import { FollowerState } from '../states/follower.state';


export const initialState: FollowerState = {
  response: undefined,
  isLoading: undefined,
  error: undefined,
};


export const FollowerReducer = createReducer(
  initialState,
  on(FollowerActions.fetchFollowerStart, (state) => ({ ...state, isLoading: true, error: undefined })),
  on(FollowerActions.fetchFollowerSuccess, (state, { response }) => ({ ...state,response : response , isLoading: false , error: undefined})),
  on(FollowerActions.fetchFollowerError, (state, { error }) => ({ ...state, isLoading: false, error: error })),
);
