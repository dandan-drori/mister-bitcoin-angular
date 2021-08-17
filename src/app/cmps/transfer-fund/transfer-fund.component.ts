import { UserService } from './../../services/user.service';
import { Contact } from './../../services/contact.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss'],
})
export class TransferFundComponent implements OnInit {
  @Input() contact: Contact = null;
  amount = 0;

  constructor(private userService: UserService) {}

  onTransferMoney() {
    this.userService.makeMove(this.contact, this.amount);
  }

  ngOnInit(): void {}
}
