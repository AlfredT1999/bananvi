import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IContact from '../models/IContact';

const URL = "https://localhost:7240/api"

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  public async send(data: IContact) {
    this.http.post<any>(URL + '/Auth/Signup', data).subscribe()
  }
}
