import { Contact } from './../../services/contact.model';
import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  subscription: Subscription;
  contacts: Contact[];
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.subscription = this.contactService.contacts$.subscribe((contacts) => {
      this.contacts = contacts;
    });
    this.contactService.loadContacts();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
