import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FollowerState } from '../states/follower.state';

export const selectFollowerState = createFeatureSelector<FollowerState>('follower');
export const selectFollowers = createSelector(selectFollowerState,(state: FollowerState) => state.response);
export const isLoading = createSelector(selectFollowerState,(state: FollowerState) => state.isLoading);
export const error = createSelector(selectFollowerState,(state: FollowerState) => state.error);
