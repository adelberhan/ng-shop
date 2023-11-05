import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { User } from '../modules/user';
import { LocalStorageService } from './localstorge.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURLUsers = environment.apiUrl + 'users';
userInfo:{
  name: string,
  email: string,
  password: string,
  phone: number,
  isAdmin: boolean,
  street:string,
  apartment: number,
  zip: number,
  city: string,
  country: 'Egypt'
}
  constructor(
    private http: HttpClient,
    private token: LocalStorageService,
    private router: Router
  ) {}

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiURLUsers}/login`, {
      email,
      password,
    });
  }


  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiURLUsers}/register `, user);
  }

  logout() {
    this.token.removeToken();
    this.router.navigate(['/login']);
  }
}
