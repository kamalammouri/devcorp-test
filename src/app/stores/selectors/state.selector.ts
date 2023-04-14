import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StateRepoState } from '../states/state.state';

export const selectStateRepoState = createFeatureSelector<StateRepoState>('repo');
export const selectRepos = createSelector(selectStateRepoState,(state: StateRepoState) => state.response);
export const isLoading = createSelector(selectStateRepoState,(state: StateRepoState) => state.isLoading);
export const error = createSelector(selectStateRepoState,(state: StateRepoState) => state.error);
