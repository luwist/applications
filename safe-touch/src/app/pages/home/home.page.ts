import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Motion } from '@capacitor/motion';
import { CapacitorFlash } from '@capgo/capacitor-flash';
import {NativeAudio} from '@capacitor-community/native-audio';
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

  sounds: any = [
    {
      id: 1,
      name: 'police',
      url: 'assets/sounds/police.mp3'
    },
    {
      id: 2,
      name: 'alarm',
      url: 'assets/sounds/alarm.mp3'
    }
  ]

  constructor(
    private _modalController: ModalController,
    private _authService: AuthService,
    private _router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.currentUser$ = this._authService.currentUser$;

    this.sounds.forEach((sound: any) => {
      NativeAudio.preload({
        assetId: sound.name,
        assetPath: sound.url,
        audioChannelNum: 1,
        isUrl: false
    });
    });

    await this.checkOrientation();
  }

  async checkOrientation(): Promise<void> {
    await Motion.addListener('accel', async (event) => {
      const { x, y, z } = event.accelerationIncludingGravity;

      const beta = Math.atan2(y, z) * (180 / Math.PI);

      if (beta > 90 && this.isLocked) {
        await CapacitorFlash.switchOn({
          intensity: 100,
        });

        NativeAudio.loop({
          assetId: 'alarm',
        });
      } else {
        NativeAudio.loop({
          assetId: 'police',
        });
        await CapacitorFlash.switchOff();
      }
    });
  }

  async onToggle(): Promise<void> {
    if (this.isLocked) {
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
