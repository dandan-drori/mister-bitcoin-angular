import { Move } from '../services/move.model';

export class User {
  constructor(
    public _id?: string,
    public name: string = '',
    public coins: number = 100,
    public moves: Move[] = []
  ) {}

  setId?(): void {
    var txt = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < possible.length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    this._id = txt;
  }
}
