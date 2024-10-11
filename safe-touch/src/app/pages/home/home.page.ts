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
  ModalController,
} from '@ionic/angular/standalone';
import { InputComponent, UnlockModalComponent } from 'src/app/components';

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

  pass = '12452';

  constructor(private _modalController: ModalController) {}

  async onToggle(): Promise<void> {
    if (!this.isLocked) {
      this.isLocked = true;

      this.showModal();
    }

    if (this.isLocked) {
      this.showModal();
    }
  }

  async showModal(): Promise<void> {
    const modal = await this._modalController.create({
      component: UnlockModalComponent,
      breakpoints: [0, 1],
      initialBreakpoint: 1,
      cssClass: 'block',
    });

    modal.present();
  }

  async onUnlock(): Promise<void> {
    if (this.isLocked && this.pass === '12452') {
      this.isLocked = false;

      await this._modalController.dismiss();
    }
  }
}
