import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _auth: Auth, private _router: Router) {}

  async login(request: Login): Promise<void> {
    await signInWithEmailAndPassword(
      this._auth,
      request.email,
      request.password
    );
  }

  async logout(): Promise<void> {
    await signOut(this._auth);

    this._router.navigateByUrl('/login', { replaceUrl: true });
  }
}
