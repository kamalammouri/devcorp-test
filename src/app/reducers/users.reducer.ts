import { createReducer, on } from '@ngrx/store';
import * as usersAction from '../actions/users.actions';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Iuser } from '../models/user.model';

export interface State extends EntityState<Iuser> {
  selectedUserLogin: string | undefined;
}

export const adapter: EntityAdapter<Iuser> = createEntityAdapter<Iuser>({
  selectId: (user) => user.login,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  selectedUserLogin: undefined,
});

export const reducer = createReducer(
  initialState,
  on(usersAction.fetshUsersSuccess, (state, { response }) => {
    return adapter.setAll(response, state);
  }),
);

