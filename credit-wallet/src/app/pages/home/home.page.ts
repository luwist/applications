import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonTabButton,
  IonTabBar,
  IonTabs,
  IonButtons,
  IonButton,
  IonIcon,
  IonAvatar,
  IonList,
  IonLabel,
  IonItem,
  IonMenu,
  IonMenuToggle,
} from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonItem,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonAvatar,
    IonIcon,
    IonButton,
    IonButtons,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonMenuToggle,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class HomePage implements OnInit {
  currentUser$!: Observable<User | null>;

  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {
    this.currentUser$ = this._authService.currentUser$;

    console.log('Home Inicializada');
  }

  logout(): void {
    this._authService.logout();

    this._router.navigateByUrl('/login', { replaceUrl: true });
  }
}
