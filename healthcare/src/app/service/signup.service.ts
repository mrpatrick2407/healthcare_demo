import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  signup(email: string, pwd: string, name: string, cpwd: string): Observable<boolean> {
    if (pwd === cpwd) {
      const body = { email: email, password: pwd, name: name };
      return this.http.post('http://localhost:8080/signup', body).pipe(
        map(response => true), // Return true if the request succeeds
        catchError(error => {
          console.error('Error during signup:', error);
          return of(false); // Return false if the request fails
        })
      );
    } else {
      return of(false);
    }
  }
}
