import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';
import { AccountCardComponent } from 'src/app/components/account-card/account-card.component';
import { DividerComponent } from 'src/app/components/ui/divider/divider.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services';
import { Account, Login } from 'src/app/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    ReactiveFormsModule,
    IonInput,
    IonButton,
    AccountCardComponent,
    DividerComponent,
  ],
})
export class LoginPage {
  accounts: any = [
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

      this._router.navigateByUrl('/', { replaceUrl: true });
    } catch (error) {
      // this.isToastOpen = true;
    } finally {
      // this.buttonText = 'Ingresar';
    }
  }
}
