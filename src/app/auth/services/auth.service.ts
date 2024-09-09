import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../../../env/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = env.apiUrl;

  constructor(private http: HttpClient) { }

  register(username: string, password: string, email: string) : Observable<any> {
    return this.http.post(
      this.apiUrl + "auth/register", 
      {
        name: username,
        password: password,
        email: email
      }
    )
  }

  login(email: string, password: string) : Observable<any> {
    return this.http.post(
      this.apiUrl + "auth/login",
      {
        email: email,
        password: password
      }
    )
  }
}
