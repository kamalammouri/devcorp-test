import { createReducer, on } from '@ngrx/store';
import * as stateActions from '../actions/state.actions'
import { StateRepoState } from '../states/state.state';


export const initialState: StateRepoState = {
  response: undefined,
  isLoading: undefined,
  error: undefined,
};


export const stateRepoReducer = createReducer(
  initialState,
  on(stateActions.fetchStateStart, (state) => ({ ...state, isLoading: true, error: undefined })),
  on(stateActions.fetchStateSuccess, (state, { response }) => ({ ...state,response : response , isLoading: false , error: undefined})),
  on(stateActions.fetchStateError, (state, { error }) => ({ ...state, isLoading: false, error: error })),
);
