import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import IResponse from '../models/response/IResponse';
import ISaladTypeModel from '../models/salads/ISaladTypeModel';

const URL = "https://localhost:7240/api"

@Injectable({
  providedIn: 'root'
})
export class SaladHandlerService {
  response!: IResponse

  constructor(private http: HttpClient) { }

  public async AddSalad(saladInfo: ISaladTypeModel) {
    return this.http.post<any>(URL + '/SaladHandler/AddSalad', saladInfo)
    .pipe(
      map(res => {
        return res
      })
    )
  }
}
