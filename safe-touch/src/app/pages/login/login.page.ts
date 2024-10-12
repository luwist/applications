import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonButton,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';
import { DividerComponent, InputComponent } from 'src/app/components';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services';
import { Router } from '@angular/router';
import { Account, Login } from 'src/app/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    InputComponent,
    IonButton,
    IonSelect,
    IonSelectOption,
    DividerComponent,
    ReactiveFormsModule,
  ],
})
export class LoginPage {
  accounts: Account[] = [
    {
      id: 1,
      email: 'tester@tester.com',
      password: '555555',
      role: 'tester',
    },
    {
      id: 2,
      email: 'anonimo@anonimo.com',
      password: '444444',
      role: 'anonimo',
    },
    {
      id: 3,
      email: 'invitado@invitado.com',
      password: '222222',
      role: 'invitado',
    },
  ];

  form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  hasError: boolean = false;
  isLoading: boolean = false;

  constructor(private _authService: AuthService, private _router: Router) {}

  onAccount(e: any): void {
    console.log(e);

    this.accounts.forEach((account) => {
      if (account.role == e.detail.value) {
        this.form.patchValue({
          email: account.email,
          password: account.password,
        });
      }
    });
  }

  async onLogin(): Promise<void> {
    try {
      const credentials = this.form.getRawValue() as Login;

      this.form.markAsPending();
      this.isLoading = true;

      await this._authService.login(credentials);

      this._router.navigateByUrl('/', { replaceUrl: true });
    } catch (error) {
      this.hasError = true;
    } finally {
      this.isLoading = false;
    }
  }
}
