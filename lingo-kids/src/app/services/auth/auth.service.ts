import { Injectable } from '@angular/core';
import { Login } from 'src/app/interfaces';
import { Credentials } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // constructor(private _auth: Auth) {}

  async login(request: Login): Promise<void> {
    // await signInWithEmailAndPassword(
    //   this._auth,
    //   request.email,
    //   request.password
    // );
  }
}
