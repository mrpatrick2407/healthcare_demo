import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'src/app/home/contact/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  submit(form: Contact) {
    const http = {
      headers: new HttpHeaders({ Accept: 'application/json' }),
    };
    console.log(form);
    return this.http.post('http://localhost:8080/contact', form,http);
  }
}
