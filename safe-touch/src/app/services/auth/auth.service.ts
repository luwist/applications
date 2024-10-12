import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { Login } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$ = authState(this._auth);

  constructor(private _auth: Auth) {}

  async login(request: Login): Promise<void> {
    await signInWithEmailAndPassword(
      this._auth,
      request.email,
      request.password
    );
  }

  async logout(): Promise<void> {
    await signOut(this._auth);
  }
}
