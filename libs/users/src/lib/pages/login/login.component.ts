import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LocalStorageService } from '../../services/localstorge.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartService } from '@ng-shop/cart';
import { MessageService } from 'primeng/api';

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
  userName!: string;
  userId!: string;

  constructor(
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService,
    private router: Router,
    private auth: AuthService,
    private cartServices: CartService,
    private messageService: MessageService,
    private userServices: UsersService,
    private token: LocalStorageService
  ) {}
  ngOnInit(): void {
    this._initLoginForm();
    // this.userToken();
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
          const cart = localStorage.getItem('cart');
          this.userToken();

          setTimeout(() => {
            if (cart) {
              this.welcomeMessage();
              this.router.navigate(['/checkout']);
            } else {
              this.router.navigate(['/']);
            }
          }, 1000);
        },
        (error: HttpErrorResponse) => {
          this.authError = true;
          if (error.status !== 400) {
            this.authMessage = 'Error in the Server, please try again later!';
          }
        }
      );
  }

  private userToken() {
    const token = this.token.getToken();
    if (token) {
      const tokenDecode = JSON.parse(atob(token.split('.')[1]));

      this.userId = tokenDecode.userId;

      this.userServices.getUser(this.userId).subscribe((data) => {
        this.userName = data.name;
      });
    }
  }

  welcomeMessage() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: `🤍 ${this.userName}  منور يا `,
    });
  }

  get loginForm() {
    return this.loginFormGroup.controls;
  }
}
