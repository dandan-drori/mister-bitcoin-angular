import { ContactService } from './../../services/contact.service';
import { Contact } from './../../services/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
})
export class ContactEditComponent implements OnInit {
  contact: Contact;
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {}

  onRemoveContact() {
    if (!this.contact || !this.contact._id) return;
    this.contactService.deleteContact(this.contact._id);
    this.router.navigateByUrl('/contact');
  }

  onSaveContact() {
    this.contactService.saveContact(this.contact);
    this.router.navigateByUrl('/contact');
  }

  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      const { id } = params;
      this.contact = id
        ? await this.contactService.getContactById(id).toPromise()
        : ({ name: '', phone: '', email: '' } as Contact);
    });
  }
}
