import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { AccountCardComponent } from 'src/app/components';
import { Account, Login } from 'src/app/interfaces';
import { AuthService, UserService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    AccountCardComponent,
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

  selectedAccount!: number;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  hasError: boolean = false;
  isLoading: boolean = false;

  constructor(private _authService: AuthService, private _router: Router) {}

  get emailControl(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }

  onSelectedAccount(account: Account): void {
    this.selectedAccount = account.id;

    this.form.patchValue({
      email: account.email,
      password: account.password,
    });
  }

  async onLogin(): Promise<void> {
    try {
      const credentials = this.form.getRawValue() as Login;

      this.form.markAsPending();

      await this._authService.login(credentials);

      this._router.navigateByUrl('/home', { replaceUrl: true });
    } catch (error) {
      // this.isToastOpen = true;
    } finally {
      // this.buttonText = 'Ingresar';
    }
  }
}
