import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ISignin from '../models/auth/ISignin';
import IUserAuth from '../models/auth/ISignup';

const URL = "https://localhost:7240/api"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    
  }

  public async signin(userInfo: ISignin) {
    this.http.post<any>(URL + '/Auth/Signin', userInfo).subscribe()
  }

  public async signup(userInfo: IUserAuth) {
    this.http.post<any>(URL + '/Auth/Signup', userInfo).subscribe()
  }

  public async logout() {
    
  }
}
