import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RepoState } from '../states/repo.state';

export const selectRepoState = createFeatureSelector<RepoState>('repo');
export const selectRepos = createSelector(selectRepoState,(state: RepoState) => state.response);
export const isLoading = createSelector(selectRepoState,(state: RepoState) => state.isLoading);
export const error = createSelector(selectRepoState,(state: RepoState) => state.error);
