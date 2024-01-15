import { Injectable } from '@angular/core';
import { LocalStorageService } from './localstorge.service';
import { Router, } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./localstorge.service";
export class AuthGuard {
    constructor(router, localStorageService) {
        this.router = router;
        this.localStorageService = localStorageService;
    }
    canActivate(route, state) {
        const token = this.localStorageService.getToken();
        if (token) {
            const tokenDecode = JSON.parse(atob(token.split('.')[1]));
            if (token && !this.token_exp(tokenDecode.exp))
                return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
    token_exp(exp) {
        return Math.floor(new Date().getTime() / 1000) >= exp;
    }
    static { this.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.LocalStorageService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.LocalStorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9zZXJ2aWNlcy9hdXRoLWd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUlMLE1BQU0sR0FDUCxNQUFNLGlCQUFpQixDQUFDOzs7O0FBS3pCLE1BQU0sT0FBTyxTQUFTO0lBQ3BCLFlBQ1UsTUFBYyxFQUNkLG1CQUF3QztRQUR4QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUMvQyxDQUFDO0lBQ0osV0FBVyxDQUFDLEtBQTZCLEVBQUUsS0FBMEI7UUFDbkUsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xELElBQUksS0FBSyxFQUFFO1lBQ1QsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUQsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7Z0JBQUUsT0FBTyxJQUFJLENBQUM7U0FDNUQ7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFakMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU8sU0FBUyxDQUFDLEdBQVc7UUFDM0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDO0lBQ3hELENBQUM7MEVBbEJVLFNBQVM7dUVBQVQsU0FBUyxXQUFULFNBQVMsbUJBRlIsTUFBTTs7dUZBRVAsU0FBUztjQUhyQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9sb2NhbHN0b3JnZS5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIENhbkFjdGl2YXRlLFxuICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICBSb3V0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlXG4gICkge31cbiAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0VG9rZW4oKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGNvbnN0IHRva2VuRGVjb2RlID0gSlNPTi5wYXJzZShhdG9iKHRva2VuLnNwbGl0KCcuJylbMV0pKTtcbiAgICAgIGlmICh0b2tlbiAmJiAhdGhpcy50b2tlbl9leHAodG9rZW5EZWNvZGUuZXhwKSkgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSB0b2tlbl9leHAoZXhwOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApID49IGV4cDtcbiAgfVxufVxuIl19