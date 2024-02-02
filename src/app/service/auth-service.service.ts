import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private authURL = 'https://sctsbackend.azurewebsites.net/api/Auth/login'

  constructor(private http: HttpClient) { }

  login(email: string, password: string, rememberMe: boolean): Observable<any> {
    const body = {
      email: email,
      password: password,
      rememberMe: rememberMe
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    return this.http.post(this.authURL, body, { headers: headers })
  }
}
