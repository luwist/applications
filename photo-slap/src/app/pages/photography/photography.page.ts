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
  IonModal,
  ModalController,
} from '@ionic/angular/standalone';
import { Camera, CameraResultType } from '@capacitor/camera';
import { AuthService, UploadService } from 'src/app/services';
import { PhotoRepository } from 'src/app/repositories';
import { User } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { FileuploadComponent } from 'src/app/components/ui/fileupload/fileupload.component';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.page.html',
  styleUrls: ['./photography.page.scss'],
  standalone: true,
  imports: [
    IonModal,
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
  currentUser$!: Observable<User | null>;
  currentImage: string | undefined = '';

  constructor(
    private _authService: AuthService,
    private _uploadService: UploadService,
    private _photoRepository: PhotoRepository,
    private _modalController: ModalController
  ) {
    this.currentUser$ = this._authService.currentUser$;
  }

  async openModal() {
    const modal = await this._modalController.create({
      component: FileuploadComponent,
      componentProps: {
        currentImage: this.currentImage,
      },
      showBackdrop: true,
    });

    await modal.present();
  }

  async closeModal() {
    await this._modalController.dismiss();
  }

  async takePicture(): Promise<void> {
    const photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });

    this.currentImage = photo.dataUrl;

    await this.openModal();

    const photoUrl = await this._uploadService.uploadPhoto(photo);

    this.currentUser$.subscribe((user) => {
      const firstName = user?.displayName?.split(' ')[0] as string;
      const lastName = user?.displayName?.split(' ')[1] as string;

      this._photoRepository.add({
        image: photoUrl,
        firstName: firstName,
        lastName: lastName,
      });
    });

    // await this.closeModal();
  }
}
