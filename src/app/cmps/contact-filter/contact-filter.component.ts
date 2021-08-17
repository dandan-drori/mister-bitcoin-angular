import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss'],
})
export class ContactFilterComponent implements OnInit {
  filter = {
    term: '',
  };

  constructor(private contactService: ContactService) {}

  onSetFilter(): void {
    this.contactService.loadContacts(this.filter);
  }

  ngOnInit(): void {}
}
