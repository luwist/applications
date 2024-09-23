import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonSkeletonText,
} from '@ionic/angular/standalone';
import { AuthService } from 'src/app/services';
import { User } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    CommonModule,
    FormsModule,
    IonSkeletonText,
  ],
})
export class ProfilePage {
  currentUser$!: Observable<User | null>;

  constructor(private _authService: AuthService, private _router: Router) {
    this.currentUser$ = this._authService.currentUser$;
  }

  logout(): void {
    this._authService.logout();

    this._router.navigateByUrl("/login");
  }
}
