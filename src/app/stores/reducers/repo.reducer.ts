import { createReducer, on } from '@ngrx/store';
import * as repoActions from '../actions/repo.actions'
import { RepoState } from '../states/repo.state';


export const initialState: RepoState = {
  response: undefined,
  isLoading: undefined,
  error: undefined,
};


export const repoReducer = createReducer(
  initialState,
  on(repoActions.fetchRepoStart, (state) => ({ ...state, isLoading: true, error: undefined })),
  on(repoActions.fetchRepoSuccess, (state, { response }) => ({ ...state,response : response , isLoading: false , error: undefined})),
  on(repoActions.fetchRepoError, (state, { error }) => ({ ...state, isLoading: false, error: error })),
);
