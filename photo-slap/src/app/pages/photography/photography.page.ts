import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonMenuToggle,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonButtons,
  IonButton,
} from '@ionic/angular/standalone';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.page.html',
  styleUrls: ['./photography.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonButtons,
    IonMenu,
    IonMenuToggle,
    IonIcon,
    IonLabel,
    IonItem,
    IonList,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class PhotographyPage {
  constructor() {}

  async takePicture(): Promise<void> {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });

    var imageUrl = image.webPath;

    // imageElement.src = imageUrl;
  }

  logout(): void {
    console.log('Cerrar Sesion');
  }
}
