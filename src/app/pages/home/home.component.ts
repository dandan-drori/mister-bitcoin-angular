import { User } from './../../services/user.model';
import { BitcoinService } from './../../services/bitcoin.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  routes = ['home', 'contact'];
  currRoute = 'home';

  user: User = null;
  rate: number;

  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService
  ) {}

  getRecentMoves() {
    return this.user.moves.slice(0, 3);
  }

  async ngOnInit(): Promise<void> {
    this.user = this.userService.getUser();
    this.rate = await this.bitcoinService.getRate(this.user.coins);
  }
}
