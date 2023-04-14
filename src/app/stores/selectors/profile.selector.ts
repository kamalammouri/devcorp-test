import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileState } from '../states/profile.state';

export const selectProfileState = createFeatureSelector<ProfileState>('profile');
export const selectProfile = createSelector(selectProfileState,(state: ProfileState) => state.response);
export const isLoading = createSelector(selectProfileState,(state: ProfileState) => state.isLoading);
export const error = createSelector(selectProfileState,(state: ProfileState) => state.error);
