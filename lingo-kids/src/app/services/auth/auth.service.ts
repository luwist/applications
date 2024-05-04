import { Injectable } from '@angular/core';
import { Credentials } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(credentials: Credentials): void {}
}
