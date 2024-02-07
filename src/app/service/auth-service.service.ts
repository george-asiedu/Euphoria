import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private authURL = 'https://sctsbackend.azurewebsites.net/api/Auth/login'
  private productURL = 'https://mock.shop/api?query={product(id:%20%22gid://shopify/Product/7982905098262%22){id%20title%20description%20featuredImage%20{id%20url}}}'
  private menProductURL = 'https://fakestoreapi.com/products?limit=12'

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

  getProducts(): Observable<any> {
    return this.http.get(this.productURL)
  }

  getMenProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.menProductURL)
  }
}
