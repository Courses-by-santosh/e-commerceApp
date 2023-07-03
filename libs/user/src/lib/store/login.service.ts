import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  isLoggedIn = false;

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<string>('https://fakestoreapi.com/auth/login', {
      username,
      password,
    });
  }
}
