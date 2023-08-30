import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:3000/auth/signup';

  httpOptions = { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) { }

  signup(user: Omit<User, "id">): Observable<User> { }
}
