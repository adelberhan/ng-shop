import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../../../../libs/users/src/lib/services/user.service';
import { User } from '../../../../../../libs/users/src/lib/modules/user';
import * as countries from 'i18n-iso-countries';

declare const require;

@Component({
  selector: 'users-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  isAdmin = false;
  form: FormGroup;
  isSubmitted = false;
  // editmode = false;
  currentUserId: string;
  message: string;
  status: boolean;
  country = [];
  constructor(
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private location: Location,
    private usersService: AuthService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      isAdmin: [false],
      street: [''],
      apartment: [''],
      zip: [''],
      city: [''],
      country: [''],
    });

    this._getCountriesList();
  }
  cancel() {
    this.location.back();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    const user: User = {
      id: this.currentUserId,
      name: this.userForm.name.value,
      email: this.userForm.email.value,
      password: this.userForm.password.value,
      phone: this.userForm.phone.value,
      isAdmin: this.userForm.isAdmin.value,
      street: this.userForm.street.value,
      apartment: this.userForm.apartment.value,
      zip: this.userForm.zip.value,
      city: this.userForm.city.value,
      country: this.userForm.country.value,
    };

    this._createUser(user);
  }

  private _getCountriesList() {
    countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
    this.country = Object.entries(
      countries.getNames('en', { select: 'official' })
    ).map((entry) => {
      return {
        id: entry[0],
        name: entry[1],
      };
    });
  }

  private _createUser(user: User) {
    this.usersService.createUser(user).subscribe(
      (user: User) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `😀 ${user.name}   منور والله عم `,
        });
        timer(2000)
          .toPromise()
          .then(() => {
            this.location.back();
          });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'user is not created!',
        });
      }
    );
  }

  // private _updateUser(user: User) {
  //   this.usersService.updateUser(user).subscribe(
  //     () => {
  //       this.messageService.add({
  //         severity: 'success',
  //         summary: 'Success',
  //         detail: 'User is updated!',
  //       });
  //       timer(2000)
  //         .toPromise()
  //         .then(() => {
  //           this.location.back();
  //         });
  //     },
  //     () => {
  //       this.messageService.add({
  //         severity: 'error',
  //         summary: 'Error',
  //         detail: 'User is not updated!',
  //       });
  //     }
  //   );
  // }

  // private _checkEditMode() {
  //   this.route.params.subscribe((params) => {
  //     if (params.id) {
  //       this.editmode = true;
  //       this.currentUserId = params.id;
  //       this.usersService.getUser(params.id).subscribe((user: User) => {
  //         this.userForm.name.setValue(user.name);
  //         this.userForm.email.setValue(user.email);
  //         this.userForm.phone.setValue(user.phone);
  //         this.userForm.isAdmin.setValue(user.isAdmin);
  //         this.userForm.street.setValue(user.street);
  //         this.userForm.apartment.setValue(user.apartment);
  //         this.userForm.zip.setValue(user.zip);
  //         this.userForm.city.setValue(user.city);
  //         this.userForm.country.setValue(user.country);
  //         this.userForm.zip.setValue(user.zip);
  //         this.userForm.password.setValidators([]);
  //         this.userForm.password.updateValueAndValidity();
  //       });
  //     }
  //   });
  // }
  get userForm() {
    return this.form.controls;
  }
}
