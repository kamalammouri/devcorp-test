import * as fromUser from './users.reducer';
import * as fromApi from './api-users.reducer';
import { Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';

export interface UserState {
  user: fromUser.State;
  api: fromApi.State;
}

const featureSelector = createFeatureSelector<UserState>('user');
const userSelector = createSelector(featureSelector, (x) => x.user);
const apiSelector = createSelector(featureSelector, (x) => x.api);

const { selectAll, selectEntities, selectIds, selectTotal } = fromUser.adapter.getSelectors(userSelector);

export const userEntities = selectAll;

export const getIsLoading = createSelector(
  apiSelector,
  fromApi.isLoading
)

export const getApiError = createSelector(
  apiSelector,
  fromApi.error
)

export function reducers(state:UserState,action:Action):any {
  return combineReducers({
    user:fromUser.reducer,
    api: fromApi.reducer
  })(state,action)
}
