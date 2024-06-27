import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  register(username: string, password: string) {
    return this.http.post('http://localhost:3000/register', { username, password });
  }

  login(username: string, password: string) {
    return this.http.post<{ token: string }>('http://localhost:3000/login', { username, password })
      .subscribe(response => {
        this.token = response.token;
        this.router.navigate(['/products']);
      });
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
