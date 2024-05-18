import { Component } from '@angular/core';
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
} from '@ionic/angular/standalone';
import { PhotoCardComponent } from 'src/app/components/photo-card/photo-card.component';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
  standalone: true,
  imports: [
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
    CommonModule,
    FormsModule,
  ],
})
export class ExplorePage {
  constructor() {}
}
