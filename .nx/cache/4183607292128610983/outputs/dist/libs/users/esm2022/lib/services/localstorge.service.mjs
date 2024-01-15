import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
const TOKEN = 'jwtToken';
export class LocalStorageService {
    constructor() { }
    setToken(data) {
        localStorage.setItem(TOKEN, data);
    }
    getToken() {
        return localStorage.getItem(TOKEN);
    }
    removeToken() {
        localStorage.removeItem(TOKEN);
    }
    isValidToken() {
        const token = this.getToken();
        if (token) {
            const tokenDecode = JSON.parse(atob(token.split('.')[1]));
            return !this.token_exp(tokenDecode.exp);
        }
        else {
            return false;
        }
    }
    token_exp(exp) {
        return Math.floor(new Date().getTime() / 1000) >= exp;
    }
    // getIdFromToken() {
    //   const token = this.getToken();
    //   if (token) {
    //     const tokenDecode = JSON.parse(atob(token.split('.')[1]));
    //     if (tokenDecode) {
    //       return tokenDecode.userId;
    //     } else {
    //       // * if i got tokenDecode but not include the ID
    //       return null;
    //     }
    //   } else {
    //     // * if i did not got the token
    //     return null;
    //   }
    // }
    getIdFromToken() {
        const token = this.getToken();
        if (token) {
            const tokenDecode = JSON.parse(atob(token.split('.')[1]));
            if (tokenDecode) {
                return tokenDecode.userId;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }
    static { this.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LocalStorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxzdG9yZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdXNlcnMvc3JjL2xpYi9zZXJ2aWNlcy9sb2NhbHN0b3JnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQztBQUt6QixNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLGdCQUFlLENBQUM7SUFFaEIsUUFBUSxDQUFDLElBQVk7UUFDbkIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELFFBQVE7UUFDTixPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELFdBQVc7UUFDVCxZQUFZLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxZQUFZO1FBQ1YsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLElBQUksS0FBSyxFQUFFO1lBQ1QsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUQsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUNPLFNBQVMsQ0FBQyxHQUFXO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUN4RCxDQUFDO0lBRUQscUJBQXFCO0lBQ3JCLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsaUVBQWlFO0lBQ2pFLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLHlEQUF5RDtJQUN6RCxxQkFBcUI7SUFDckIsUUFBUTtJQUNSLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLE1BQU07SUFDTixJQUFJO0lBRUosY0FBYztRQUNaLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixJQUFJLEtBQUssRUFBRTtZQUNULE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFELElBQUksV0FBVyxFQUFFO2dCQUNmLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQzthQUMzQjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO29GQXREVSxtQkFBbUI7dUVBQW5CLG1CQUFtQixXQUFuQixtQkFBbUIsbUJBRmxCLE1BQU07O3VGQUVQLG1CQUFtQjtjQUgvQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IFRPS0VOID0gJ2p3dFRva2VuJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc2V0VG9rZW4oZGF0YTogc3RyaW5nKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oVE9LRU4sIGRhdGEpO1xuICB9XG4gIGdldFRva2VuKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFRPS0VOKTtcbiAgfVxuICByZW1vdmVUb2tlbigpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShUT0tFTik7XG4gIH1cblxuICBpc1ZhbGlkVG9rZW4oKSB7XG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLmdldFRva2VuKCk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBjb25zdCB0b2tlbkRlY29kZSA9IEpTT04ucGFyc2UoYXRvYih0b2tlbi5zcGxpdCgnLicpWzFdKSk7XG4gICAgICByZXR1cm4gIXRoaXMudG9rZW5fZXhwKHRva2VuRGVjb2RlLmV4cCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSB0b2tlbl9leHAoZXhwOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApID49IGV4cDtcbiAgfVxuXG4gIC8vIGdldElkRnJvbVRva2VuKCkge1xuICAvLyAgIGNvbnN0IHRva2VuID0gdGhpcy5nZXRUb2tlbigpO1xuICAvLyAgIGlmICh0b2tlbikge1xuICAvLyAgICAgY29uc3QgdG9rZW5EZWNvZGUgPSBKU09OLnBhcnNlKGF0b2IodG9rZW4uc3BsaXQoJy4nKVsxXSkpO1xuICAvLyAgICAgaWYgKHRva2VuRGVjb2RlKSB7XG4gIC8vICAgICAgIHJldHVybiB0b2tlbkRlY29kZS51c2VySWQ7XG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAvLyAqIGlmIGkgZ290IHRva2VuRGVjb2RlIGJ1dCBub3QgaW5jbHVkZSB0aGUgSURcbiAgLy8gICAgICAgcmV0dXJuIG51bGw7XG4gIC8vICAgICB9XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIC8vICogaWYgaSBkaWQgbm90IGdvdCB0aGUgdG9rZW5cbiAgLy8gICAgIHJldHVybiBudWxsO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGdldElkRnJvbVRva2VuKCkge1xuICAgIGNvbnN0IHRva2VuID0gdGhpcy5nZXRUb2tlbigpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgY29uc3QgdG9rZW5EZWNvZGUgPSBKU09OLnBhcnNlKGF0b2IodG9rZW4uc3BsaXQoJy4nKVsxXSkpO1xuICAgICAgaWYgKHRva2VuRGVjb2RlKSB7XG4gICAgICAgIHJldHVybiB0b2tlbkRlY29kZS51c2VySWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=