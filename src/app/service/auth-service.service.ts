import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, shareReplay, throwError } from 'rxjs';
import { Products } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private authURL = 'https://sctsbackend.azurewebsites.net/api/Auth/login'
  private productURL = 'https://mock.shop/api?query={product(id:%20%22gid://shopify/Product/7982905098262%22){id%20title%20description%20featuredImage%20{id%20url}}}'
  private menProductURL = 'https://mock.shop/api?query={products(first:20){edges{node{id title description featuredImage{id url} variants(first:3){edges{node{price{amount currencyCode}}}}}}}}'
  private products$!: Observable<Products[]>

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

  getMenProducts(): Observable<Products[]> {
    if (!this.products$) {
      this.products$ = this.http.get<any>(this.menProductURL)
      .pipe(
        map(response => response.data.products.edges.map((edge: any) => edge.node) as Products[]),
        shareReplay(), // Cache the response
        catchError(error => {
          console.error('Error fetching products:', error);
          return throwError(() => error); // or handle more specific errors
        })
      )
    }
    return this.products$;
  }
}