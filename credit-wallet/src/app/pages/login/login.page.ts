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
  IonButton,
  IonInput,
  IonToast,
  IonItem,
  IonLabel,
  IonModal,
  IonAvatar,
  IonList,
  IonImg,
  ModalController,
  IonIcon,
} from '@ionic/angular/standalone';
import { Account, Login } from 'src/app/interfaces';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonImg,
    IonList,
    IonAvatar,
    IonModal,
    IonLabel,
    IonItem,
    IonToast,
    IonInput,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class LoginPage {
  accounts: Account[] = [
    {
      id: 1,
      picture: 'assets/images/avatar-03.jpg',
      name: 'Maria Fernandez',
      email: 'admin@admin.com',
      password: '111111',
      role: 'administrador',
    },
    {
      id: 2,
      picture: 'assets/images/avatar-05.jpg',
      name: 'Laura Morales',
      email: 'tester@tester.com',
      password: '555555',
      role: 'tester',
    },
    {
      id: 3,
      picture: 'assets/images/avatar-04.jpg',
      name: 'Carlos Santana',
      email: 'usuario@usuario.com',
      password: '333333',
      role: 'usuario',
    },
  ];

  isToastOpen = false;
  buttonText = 'Ingresar';

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _modalController: ModalController
  ) {}

  get emailControl(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  async onSelectedAccount(account: Account): Promise<void> {
    this.form.patchValue({
      email: account.email,
      password: account.password,
    });

    await this._modalController.dismiss();
  }

  async onLogin(): Promise<void> {
    try {
      const credentials = this.form.getRawValue() as Login;

      this.form.markAsPending();
      this.buttonText = 'Cargando...';

      await this._authService.login(credentials);

      this._router.navigateByUrl('/', { replaceUrl: true });
    } catch (error) {
      this.isToastOpen = true;
    } finally {
      this.buttonText = 'Ingresar';
    }
  }
}
