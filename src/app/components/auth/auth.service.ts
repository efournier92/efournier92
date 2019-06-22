import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userObj: AngularFireObject<User>;
  currentUser: User;

  constructor(
    private db: AngularFireDatabase,
    private angularFireAuth: AngularFireAuth,
  ) {
    this.angularFireAuth.authState.subscribe(
      authData => this.getUserById(authData)
    )
  }

  private currentUserSource = new BehaviorSubject({});
  currentUserObservable = this.currentUserSource.asObservable();

  updateCurrentUser(user: User): void {
    this.currentUserSource.next(user);
  }

  getUserById(authData: any): AngularFireObject<User> {
    if (!authData || !authData.uid) return;
    this.userObj = this.db.object(`users/${authData.uid}`);
    this.userObj.valueChanges().subscribe(
      (user: User) => {
        this.setUser(user, authData);
      }
    )
  }

  setUser(user: User, authData?: any): void {
    if (!user) {
      this.createUser(authData);
    } else {
      this.currentUser = user;
    }
    this.updateCurrentUser(this.currentUser);
  }

  createUser(authData: any): void {
    let user: User = new User(authData);
    this.userObj.update(user)
    this.updateCurrentUser(user);
  }
}
