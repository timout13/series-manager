import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: BehaviorSubject<string>;
  constructor() {
    this.token = new BehaviorSubject<string>('');
  }

  signIn(username: string, password: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (username === 'Administrateur' && password === 'azerty') {
        this.token.next('sefsdfsfsefse');
        resolve(); //Success
      } else {
        reject('Les ids sont incorrects');
      }
    });
  }
  signOut(): Promise<void> {
    return new Promise<void>((res, rej) => {
      this.token.next('');
      res(); //Success
    });
  }
}
