import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as UsersActions from './users.actions';
import * as UsersFeature from './users.reducer';

import { switchMap, catchError, of, concatMap, map } from 'rxjs';
import { LocalStorageService } from '../services/localstorge.service';
import { UsersService } from '../services/user.service';

@Injectable()
export class UsersEffects {
  // constructor(
  //   private actions$: Actions,
  //   private localStorage: LocalStorageService,
  //   private usersService: UsersService
  // ) {}
  // // * always the effects are suffixed with the dollar sign, as you see here.
  // buildUserSession$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(UsersActions.buildUserSession),
  //     concatMap(() => {
  //       if (this.localStorage.isValidToken()) {
  //         // * token is valid
  //         const userId = this.localStorage.getIdFromToken();
  //         console.log('userId', userId);
  //         if (userId) {
  //           return this.usersService.getUser(userId).pipe(
  //             map((user) => {
  //               console.log(user);
  //               return UsersActions.buildUserSessionSuccess({ user: user });
  //             }),
  //             // *  if there is error with the API
  //             catchError(() => of(UsersActions.buildUserSessionFailure()))
  //           );
  //         } else {
  //           // * In case there is no user ID
  //           return of(UsersActions.buildUserSessionFailure());
  //         }
  //       } else {
  //         // * token is not valid
  //         // * observable of some action
  //         return of(UsersActions.buildUserSessionFailure());
  //       }
  //     })
  //   )
  // );
  buildUserSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.buildUserSession),
      concatMap(() => {
        if (this.localstorageService.isValidToken()) {
          const userId = this.localstorageService.getIdFromToken();
          if (userId) {
            return this.usersService.getUser(userId).pipe(
              map((user) => {
                return UsersActions.buildUserSessionSuccess({ user: user });
              }),
              catchError(() => of(UsersActions.buildUserSession))
            );
          } else {
            return of(UsersActions.buildUserSessionFailed());
          }
        } else {
          return of(UsersActions.buildUserSessionFailed());
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private localstorageService: LocalStorageService,
    private usersService: UsersService
  ) {}
}
