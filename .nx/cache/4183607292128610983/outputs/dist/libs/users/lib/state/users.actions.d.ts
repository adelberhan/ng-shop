import { User } from '../modules/user';
export declare const buildUserSession: import("@ngrx/store").ActionCreator<"[Users] Build User Session", () => import("@ngrx/store/src/models").TypedAction<"[Users] Build User Session">>;
export declare const buildUserSessionSuccess: import("@ngrx/store").ActionCreator<"[Users] Build User Session Success", (props: {
    user: User;
}) => {
    user: User;
} & import("@ngrx/store/src/models").TypedAction<"[Users] Build User Session Success">>;
export declare const buildUserSessionFailed: import("@ngrx/store").ActionCreator<"[Users] Build User Session Failed", () => import("@ngrx/store/src/models").TypedAction<"[Users] Build User Session Failed">>;
