import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as UsersActions from './users.actions';
import * as UsersSelectors from './users.selectors';
import { getUser } from './users.selectors';

@Injectable()
export class UsersFacade {
  private readonly store = inject(Store);
  // currentUser$ = this.store.select(getUser);

  currentUser$ = this.store.pipe(select(getUser));
  isAuthenticatedUser$ = this.store.pipe(select(UsersSelectors.getUserIsAuth));

  buildUserSession() {
    this.store.dispatch(UsersActions.buildUserSession());
  }
}
