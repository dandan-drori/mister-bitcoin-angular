import { Contact } from './contact.model';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user = JSON.parse(localStorage.getItem('user')) || {};
  private user = Object.keys(this._user).length
    ? new User(
        this._user._id,
        this._user.name,
        this._user.coins,
        this._user.moves
      )
    : new User(undefined, 'default name');
  private _user$ = new BehaviorSubject<User>(this.user);
  public user$ = this._user$.asObservable();

  constructor() {}

  signup(name: string) {
    if (!name) return;
    this.user = new User(undefined, name);
    this.user.setId();
    localStorage.setItem('user', JSON.stringify(this.user));
    this._user$.next(this.user);
  }

  makeMove(contact: Contact, amount: number) {
    if (amount > this.user.coins) return;
    const move = {
      toId: contact._id,
      to: contact.name,
      at: Date.now(),
      amount,
    };
    this.user.moves.unshift(move);
    this.user.coins -= amount;
    localStorage.setItem('user', JSON.stringify(this.user));
    // this._user$.next(this.user);
  }

  getUser() {
    return this.user;
  }
}
