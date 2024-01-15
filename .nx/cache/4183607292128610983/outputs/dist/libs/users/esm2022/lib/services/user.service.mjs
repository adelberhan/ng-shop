import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as countriesLib from 'i18n-iso-countries';
import { LocalStorageService } from './localstorge.service';
import { Router } from '@angular/router';
import { UsersFacade } from '../state/users.facade';
import { environment } from '../../environments/environment';
import { MessageService } from 'primeng/api';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./localstorge.service";
import * as i3 from "@angular/router";
import * as i4 from "../state/users.facade";
import * as i5 from "primeng/api";
export class UsersService {
    constructor(http, token, router, usersFacade, messageService) {
        this.http = http;
        this.token = token;
        this.router = router;
        this.usersFacade = usersFacade;
        this.messageService = messageService;
        this.apiUserUrl = environment.apiUrl + 'users';
    }
    getUsers() {
        return this.http.get(`${this.apiUserUrl}`);
    }
    createUser(user) {
        return this.http.post(`${this.apiUserUrl} `, user);
    }
    deleteUser(userId) {
        return this.http.delete(`${this.apiUserUrl}/${userId}`);
    }
    getUser(userId) {
        return this.http.get(`${this.apiUserUrl}/${userId}`);
    }
    updateUser(user) {
        return this.http.put(`${this.apiUserUrl}/${user.id}`, user);
    }
    getCountry(countryKey) {
        return countriesLib.getName(countryKey, 'en');
    }
    getCountries() {
        return Object.entries(countriesLib.getNames('en', { select: 'official' })).map((entry) => {
            return {
                id: entry[0],
                name: entry[1],
            };
        });
    }
    login(email, password) {
        return this.http.post(`${this.apiUserUrl}/login`, {
            email,
            password,
        });
    }
    logOut() {
        this.token.removeToken();
        this.router.navigate(['/login']);
    }
    initAppSession() {
        this.usersFacade.buildUserSession();
    }
    observeCurrentUser() {
        return this.usersFacade.currentUser$;
    }
    isCurrentUserAuth() {
        return this.usersFacade.isAuthenticatedUser$;
    }
    static { this.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LocalStorageService), i0.ɵɵinject(i3.Router), i0.ɵɵinject(i4.UsersFacade), i0.ɵɵinject(i5.MessageService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UsersService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.LocalStorageService }, { type: i3.Router }, { type: i4.UsersFacade }, { type: i5.MessageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91c2Vycy9zcmMvbGliL3NlcnZpY2VzL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdsRCxPQUFPLEtBQUssWUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7QUFLN0MsTUFBTSxPQUFPLFlBQVk7SUFHdkIsWUFDVSxJQUFnQixFQUNoQixLQUEwQixFQUMxQixNQUFjLEVBQ2QsV0FBd0IsRUFDeEIsY0FBOEI7UUFKOUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUFxQjtRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBUHhDLGVBQVUsR0FBRyxXQUFXLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztJQVF2QyxDQUFDO0lBQ0osUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsVUFBVSxDQUFDLE1BQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBTSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsT0FBTyxDQUFDLE1BQWM7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDRCxVQUFVLENBQUMsVUFBa0I7UUFDM0IsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FDbkIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FDcEQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNkLE9BQU87Z0JBQ0wsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ1osSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDZixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQWEsRUFBRSxRQUFnQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsUUFBUSxFQUFFO1lBQ3RELEtBQUs7WUFDTCxRQUFRO1NBQ1QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7SUFDdkMsQ0FBQztJQUVELGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztJQUMvQyxDQUFDOzZFQWhFVSxZQUFZO3VFQUFaLFlBQVksV0FBWixZQUFZLG1CQUZYLE1BQU07O3VGQUVQLFlBQVk7Y0FIeEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2R1bGVzL3VzZXInO1xuaW1wb3J0ICogYXMgY291bnRyaWVzTGliIGZyb20gJ2kxOG4taXNvLWNvdW50cmllcyc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9sb2NhbHN0b3JnZS5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVc2Vyc0ZhY2FkZSB9IGZyb20gJy4uL3N0YXRlL3VzZXJzLmZhY2FkZSc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJzU2VydmljZSB7XG4gIGFwaVVzZXJVcmwgPSBlbnZpcm9ubWVudC5hcGlVcmwgKyAndXNlcnMnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIHRva2VuOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSB1c2Vyc0ZhY2FkZTogVXNlcnNGYWNhZGUsXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuICBnZXRVc2VycygpOiBPYnNlcnZhYmxlPFVzZXJbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFVzZXJbXT4oYCR7dGhpcy5hcGlVc2VyVXJsfWApO1xuICB9XG5cbiAgY3JlYXRlVXNlcih1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFVzZXI+KGAke3RoaXMuYXBpVXNlclVybH0gYCwgdXNlcik7XG4gIH1cbiAgZGVsZXRlVXNlcih1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8YW55PihgJHt0aGlzLmFwaVVzZXJVcmx9LyR7dXNlcklkfWApO1xuICB9XG5cbiAgZ2V0VXNlcih1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFVzZXI+KGAke3RoaXMuYXBpVXNlclVybH0vJHt1c2VySWR9YCk7XG4gIH1cbiAgdXBkYXRlVXNlcih1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8VXNlcj4oYCR7dGhpcy5hcGlVc2VyVXJsfS8ke3VzZXIuaWR9YCwgdXNlcik7XG4gIH1cbiAgZ2V0Q291bnRyeShjb3VudHJ5S2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBjb3VudHJpZXNMaWIuZ2V0TmFtZShjb3VudHJ5S2V5LCAnZW4nKTtcbiAgfVxuXG4gIGdldENvdW50cmllcygpOiB7IGlkOiBzdHJpbmc7IG5hbWU6IHN0cmluZyB9W10ge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhcbiAgICAgIGNvdW50cmllc0xpYi5nZXROYW1lcygnZW4nLCB7IHNlbGVjdDogJ29mZmljaWFsJyB9KVxuICAgICkubWFwKChlbnRyeSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGVudHJ5WzBdLFxuICAgICAgICBuYW1lOiBlbnRyeVsxXSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBsb2dpbihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFVzZXI+KGAke3RoaXMuYXBpVXNlclVybH0vbG9naW5gLCB7XG4gICAgICBlbWFpbCxcbiAgICAgIHBhc3N3b3JkLFxuICAgIH0pO1xuICB9XG5cbiAgbG9nT3V0KCkge1xuICAgIHRoaXMudG9rZW4ucmVtb3ZlVG9rZW4oKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgfVxuXG4gIGluaXRBcHBTZXNzaW9uKCkge1xuICAgIHRoaXMudXNlcnNGYWNhZGUuYnVpbGRVc2VyU2Vzc2lvbigpO1xuICB9XG5cbiAgb2JzZXJ2ZUN1cnJlbnRVc2VyKCkge1xuICAgIHJldHVybiB0aGlzLnVzZXJzRmFjYWRlLmN1cnJlbnRVc2VyJDtcbiAgfVxuXG4gIGlzQ3VycmVudFVzZXJBdXRoKCkge1xuICAgIHJldHVybiB0aGlzLnVzZXJzRmFjYWRlLmlzQXV0aGVudGljYXRlZFVzZXIkO1xuICB9XG59XG4iXX0=