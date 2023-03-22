import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ISaladIngredientModel from '../models/salads/ISaladIngredientModel';
import IResponse from '../models/response/IResponse'; 
import { map } from 'rxjs/operators';

const URL = "https://localhost:7240/api"

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  response!: IResponse

  constructor(private http: HttpClient) { }

  public async GetAllIngredients() {
    return this.http.get<any>(URL + '/IngredientsHandler/GetAllIngredients')
    .pipe(
      map(res => {
        return res
      })
    )
  }

  public async GetIngredientById(ingredientId: string) {
    return this.http.get<any>(URL + '/IngredientsHandler/GetIngredientById?ingredientId=' + ingredientId)
    .pipe(
      map(res => {
        return res
      })
    )
  }

  public async AddIngredient(userInfo: ISaladIngredientModel) {
    return this.http.post<any>(URL + '/IngredientsHandler/AddIngredient', userInfo)
    .pipe(
      map(res => {
        return res
      })
    )
  }

  public async UpdateIngredient(userInfo: ISaladIngredientModel) {
    return this.http.put<any>(URL + '/IngredientsHandler/UpdateIngredient', userInfo)
    .pipe(
      map(res => {
        return res
      })
    )
  }

  public async DeleteIngredient(ingredientId: string) {
    this.http.delete<any>(URL + '/DeleteIngredient?ingredientId=' + ingredientId).subscribe()
  }
}
