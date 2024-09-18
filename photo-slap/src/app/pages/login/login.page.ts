import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';
import { AccountCardComponent } from 'src/app/components/account-card/account-card.component';
import { DividerComponent } from 'src/app/components/ui/divider/divider.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonInput,
    IonButton,
    AccountCardComponent,
    DividerComponent,
  ],
})
export class LoginPage {
  accounts: any = [
    {
      id: 1,
      role: 'tester',
    },
    {
      id: 2,
      role: 'anonimo',
    },
    {
      id: 3,
      role: 'invitado',
    },
  ];

  constructor() {}
}
