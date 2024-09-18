import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonIcon,
  IonButton,
  IonLabel,
  IonItem,
  IonList,
  IonAvatar,
  IonImg,
  IonModal,
} from '@ionic/angular/standalone';
import { PhotoCardComponent } from 'src/app/components/photo-card/photo-card.component';
import { PhotoDetailComponent } from 'src/app/components/photo-detail/photo-detail.component';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
  standalone: true,
  imports: [
    IonModal,
    IonImg,
    IonAvatar,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonIcon,
    IonMenu,
    IonMenuButton,
    IonMenuToggle,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    PhotoCardComponent,
    PhotoDetailComponent,
    CommonModule,
    FormsModule,
  ],
})
export class ExplorePage {
  @ViewChild(IonModal) photoModal!: IonModal;

  users: any = [
    {
      id: 1,
      username: 'Juan Perez',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pixel-labs-38e6c.appspot.com/o/image-01.webp?alt=media&token=2678c035-f61b-4422-8cc8-4ae24fdb2ea3',
    },
    {
      id: 2,
      username: 'Sofia Fernandez',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pixel-labs-38e6c.appspot.com/o/image-02.jpg?alt=media&token=8fcf8134-4394-4a6c-9eb6-9a689618cab5',
    },
    {
      id: 3,
      username: 'Luis Rodriguez',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pixel-labs-38e6c.appspot.com/o/image-09.jpeg?alt=media&token=fb26b5d9-94d0-45f8-a2f7-9e53ac9bae87',
    },
    {
      id: 4,
      username: 'Lucas Benitez',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pixel-labs-38e6c.appspot.com/o/image-10.jpeg?alt=media&token=79aca4be-b9fb-45ee-a37a-fdd945f1218c',
    },
    {
      id: 5,
      username: 'Qwerty',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pixel-labs-38e6c.appspot.com/o/image-04.jpeg?alt=media&token=8df283de-371d-4ca1-8cb0-136cc529f7e7',
    },
    {
      id: 6,
      username: 'Uwessy',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pixel-labs-38e6c.appspot.com/o/image-05.webp?alt=media&token=051304f7-132f-464b-9191-846515d46d72',
    },
    {
      id: 7,
      username: 'Kwess',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pixel-labs-38e6c.appspot.com/o/image-06.jpg?alt=media&token=7939641e-8aa2-4d42-80fd-cb55e44dfac5',
    },
    {
      id: 8,
      username: 'StrogeBest',
      image:
        'https://firebasestorage.googleapis.com/v0/b/pixel-labs-38e6c.appspot.com/o/image-11.jpeg?alt=media&token=53cc1c3c-0c5e-4a7e-a6bd-a702606a688a',
    },
  ];

  currentImage!: string;

  constructor() {}

  openModal(image: string): void {
    this.currentImage = image;
    this.photoModal.present();
  }
}
