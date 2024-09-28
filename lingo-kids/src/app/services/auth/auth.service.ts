import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Login } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _auth: Auth) {}

  async login(request: Login): Promise<void> {
    await signInWithEmailAndPassword(
      this._auth,
      request.email,
      request.password
    );
  }
}
