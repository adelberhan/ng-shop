import { UsersPartialState, UsersState } from './users.reducer';
export declare const getUsersState: import("@ngrx/store").MemoizedSelector<UsersPartialState, UsersState, import("@ngrx/store").DefaultProjectorFn<UsersState>>;
export declare const getUser: import("@ngrx/store").MemoizedSelector<UsersPartialState, import("@ng-shop/users").User, (s1: UsersState) => import("@ng-shop/users").User>;
export declare const getUserIsAuth: import("@ngrx/store").MemoizedSelector<UsersPartialState, boolean, (s1: UsersState) => boolean>;
