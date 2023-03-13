import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IUserAuth from '../models/IUserAuth';

const URL = "https://localhost:7240/api"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    
  }

  public async createUser(userInfo: IUserAuth) {
    this.http.post<any>(URL + '/Auth/Signup', userInfo).subscribe()
  }

}
