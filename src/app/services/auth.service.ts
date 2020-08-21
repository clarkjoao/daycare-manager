import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import { ApiService } from './api.service';
import * as firebase from 'firebase/app';

export class CredentialsUser {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, private api: ApiService) {}

  get authenticated(): boolean {
    return this.user !== undefined;
  }

  get currentUserObservable(): any {
    return this.firebaseAuth.authState;
  }

  get currentUser(): any {
    return this.firebaseAuth.currentUser;
  }

  create(credentials: CredentialsUser) {
    return this.firebaseAuth.createUserWithEmailAndPassword(
      credentials.email,
      credentials.password
    );
  }

  login(credentials: CredentialsUser, callback) {
    this.firebaseAuth
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((user: any) => {
        this.user = user;

        if (typeof callback === 'function') {
          callback(user);
        }
      })
      .catch((err) => {
        if (typeof callback === 'function') {
          callback(err);
        }
      });
  }

  logout() {
    this.user = undefined;
    return this.firebaseAuth.signOut();
  }
}
