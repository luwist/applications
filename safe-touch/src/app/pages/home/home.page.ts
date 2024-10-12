import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Motion } from '@capacitor/motion';
import { CapacitorFlash } from '@capgo/capacitor-flash';
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
import { Observable } from 'rxjs';
import { InputComponent, UnlockModalComponent } from 'src/app/components';
import { AuthService } from 'src/app/services';

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
export class HomePage implements OnInit, OnDestroy {
  currentUser$!: Observable<User | null>;
  isLocked: boolean = false;

  constructor(
    private _modalController: ModalController,
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser$ = this._authService.currentUser$;
  }

  async checkOrientation(): Promise<void> {
    // await DeviceMotionEvent.requestPermission();

    await Motion.addListener('accel', (event) => {
      const rotationRate = event.rotationRate;

      if (rotationRate.beta > 90) {
        CapacitorFlash.switchOn({
          intensity: 100,
        });
      } else {
        CapacitorFlash.switchOff();
      }
    });
  }

  async onToggle(): Promise<void> {
    if (this.isLocked) {
      await this.checkOrientation();

      this.showModal();
    } else {
      this.isLocked = true;
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
    if (this.isLocked) {
      this.isLocked = false;

      await this._modalController.dismiss();
    }
  }

  async onLogout(): Promise<void> {
    await this._authService.logout();

    this._router.navigateByUrl('/login');
  }

  ngOnDestroy(): void {
    Motion.removeAllListeners();
  }
}
