import { Component } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from 'src/app/service/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  submitted: boolean = false;
  contact: Contact={
    name: '',
    phone: '',
    email: '',
    address: ''
  };
  constructor(private service: ContactService) {
 
  }
  submit() {
    this.service.submit(this.contact).subscribe();
    this.submitted = true;
  }
}
