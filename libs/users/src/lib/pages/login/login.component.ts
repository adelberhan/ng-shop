import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LocalStorageService } from '../../services/localstorge.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartService } from '@ng-shop/cart';

@Component({
  selector: 'users-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  isSubmitted = false;
  authError = false;
  getScreenWidth: any;
  authMessage = 'Email or password are invalid';
  cart: any;

  constructor(
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService,
    private router: Router,
    private auth: AuthService,
    private cartServices: CartService
  ) {}
  ngOnInit(): void {
    this._initLoginForm();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }

  private _initLoginForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.loginFormGroup.invalid) return;

    this.auth
      .login(this.loginForm.email.value, this.loginForm.password.value)
      .subscribe(
        (user) => {
          this.authError = false;
          this.localStorageService.setToken(user.token);
          // const cart = localStorage.getItem()
          this.router.navigate(['/']);
        },
        (error: HttpErrorResponse) => {
          this.authError = true;
          console.log(error);
          if (error.status !== 400) {
            this.authMessage = 'Error in the Server, please try again later!';
          }
        }
      );
  }
  get loginForm() {
    return this.loginFormGroup.controls;
  }
}
