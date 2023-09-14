import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  loginStatus!: number;
  login(email: string, pwd: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control': 'no-cache'
      })
    };
    const body = { email: email, password: pwd };
    return this.http.post<number>('http://localhost:8080/login', body, httpOptions)
    .pipe(
      map((res) => {
        if (res === 1) {
          this.isLoggedIn = true;
          this.loginStatus = 1;
        } else if (res === 2) {
          this.isLoggedIn = false;
          this.loginStatus = 2;
        } else {
          this.isLoggedIn = false;
          this.loginStatus = 3;
        }
        console.log(this.loginStatus); // This will log the correct value
        return this.isLoggedIn;
      })
    );
  }
}
