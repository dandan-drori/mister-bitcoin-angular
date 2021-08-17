import { BitcoinService } from './../../services/bitcoin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  dailyPrice: any = null;
  transactions: any = null;
  type: any = 'LineChart';
  titleDailyPrice: string = 'Price chart USD';
  titleTransactions: string = 'Transactions chart';
  width = 550;
  height = 400;
  myOptions = {
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
  };
  constructor(private bitcoinService: BitcoinService) {}
  isChartLoading() {
    return !this.dailyPrice || !this.transactions || !this.transactions.values;
  }
  async ngOnInit(): Promise<void> {
    const marketPrice = await this.bitcoinService.getMarketPrice();
    const transactions = await this.bitcoinService.getConfirmedTransactions();
    this.transactions = transactions.values.map(
      (coord: { x: number; y: number }) => [
        new Date(coord.x).toLocaleString().split(',')[1].substring(0, 6),
        coord.y,
      ]
    );
    this.dailyPrice = marketPrice.values.map(
      (coord: { x: number; y: number }) => [
        new Date(coord.x).toLocaleString().split(',')[1].substring(0, 6),
        coord.y,
      ]
    );
  }
}
