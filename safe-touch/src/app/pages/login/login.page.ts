import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonInput, IonButton } from '@ionic/angular/standalone';
import { InputComponent } from 'src/app/components';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, InputComponent, IonButton],
})
export class LoginPage {
  async onLogin(): Promise<void> {}
}
