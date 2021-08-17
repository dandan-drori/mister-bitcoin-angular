import { User } from './../../services/user.model';
import { UserService } from './../../services/user.service';
import { Observable } from 'rxjs';
import { Contact } from './../../services/contact.model';
import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact = null;
  user: User = null;

  constructor(
    private actRoute: ActivatedRoute,
    private contactService: ContactService,
    private userService: UserService
  ) {}

  getMovesToContact() {
    return this.user.moves.filter((move) => move.toId === this.contact._id);
  }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.params.id;
    const contactObs = this.contactService.getContactById(id);
    contactObs.subscribe((contact) => (this.contact = contact));
    this.user = this.userService.getUser();
  }
}
