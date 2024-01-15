import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as UsersActions from './users.actions';
import * as UsersSelectors from './users.selectors';
import { getUser } from './users.selectors';
import * as i0 from "@angular/core";
export class UsersFacade {
    constructor() {
        this.store = inject(Store);
        // currentUser$ = this.store.select(getUser);
        this.currentUser$ = this.store.pipe(select(getUser));
        this.isAuthenticatedUser$ = this.store.pipe(select(UsersSelectors.getUserIsAuth));
    }
    buildUserSession() {
        this.store.dispatch(UsersActions.buildUserSession());
    }
    static { this.ɵfac = function UsersFacade_Factory(t) { return new (t || UsersFacade)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UsersFacade, factory: UsersFacade.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UsersFacade, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZmFjYWRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91c2Vycy9zcmMvbGliL3N0YXRlL3VzZXJzLmZhY2FkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEtBQUssWUFBWSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sS0FBSyxjQUFjLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQUc1QyxNQUFNLE9BQU8sV0FBVztJQUR4QjtRQUVtQixVQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLDZDQUE2QztRQUU3QyxpQkFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2hELHlCQUFvQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztLQUs5RTtJQUhDLGdCQUFnQjtRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs0RUFUVSxXQUFXO3VFQUFYLFdBQVcsV0FBWCxXQUFXOzt1RkFBWCxXQUFXO2NBRHZCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCAqIGFzIFVzZXJzQWN0aW9ucyBmcm9tICcuL3VzZXJzLmFjdGlvbnMnO1xuaW1wb3J0ICogYXMgVXNlcnNTZWxlY3RvcnMgZnJvbSAnLi91c2Vycy5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gJy4vdXNlcnMuc2VsZWN0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJzRmFjYWRlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBzdG9yZSA9IGluamVjdChTdG9yZSk7XG4gIC8vIGN1cnJlbnRVc2VyJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFVzZXIpO1xuXG4gIGN1cnJlbnRVc2VyJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZ2V0VXNlcikpO1xuICBpc0F1dGhlbnRpY2F0ZWRVc2VyJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0VXNlcklzQXV0aCkpO1xuXG4gIGJ1aWxkVXNlclNlc3Npb24oKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChVc2Vyc0FjdGlvbnMuYnVpbGRVc2VyU2Vzc2lvbigpKTtcbiAgfVxufVxuIl19