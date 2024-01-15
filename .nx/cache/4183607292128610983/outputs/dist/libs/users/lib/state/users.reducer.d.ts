import { Action } from '@ngrx/store';
import { User } from '../modules/user';
export declare const USERS_FEATURE_KEY = "users";
export interface UsersState {
    user: User;
    isAuthenticated: boolean;
}
export interface UsersPartialState {
    readonly [USERS_FEATURE_KEY]: UsersState;
}
export declare const initialUsersState: UsersState;
export declare function reducer(state: UsersState | undefined, action: Action): UsersState;
