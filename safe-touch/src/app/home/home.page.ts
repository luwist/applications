import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonModal,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';
import { InputComponent } from '../components';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonModal,
    IonInput,
    IonButton,
    InputComponent,
  ],
})
export class HomePage {
  isLocked: boolean = false;

  onToggle(): void {
    this.isLocked = !this.isLocked;
  }
}
