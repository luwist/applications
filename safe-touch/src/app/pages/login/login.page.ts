import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { InputComponent } from 'src/app/components';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces';

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
    ReactiveFormsModule,
  ],
})
export class LoginPage {
  form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private _authService: AuthService, private _router: Router) {}

  async onLogin(): Promise<void> {
    try {
      const credentials = this.form.value as Login;

      await this._authService.login(credentials);

      this._router.navigateByUrl('/');
    } catch (e: any) {}
  }
}
