import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { delay, map } from 'rxjs';
import IResponse from '../../models/response/IResponse'; 
import ISaladIngredientModel from 'src/app/models/salads/ISaladIngredientModel';
import { IngredientsService } from 'src/app/services/ingredients.service';

@Component({
  selector: 'app-add-ingredients',
  templateUrl: './add-ingredients.component.html',
  styleUrls: ['./add-ingredients.component.css']
})
export class AddIngredientsComponent {
  // Declarations:
  successToast: boolean = false
  failureToast: boolean = false
  showTable: boolean = false
  res$!: any
  ingredientId: string = ''
  listIngredients: ISaladIngredientModel[] = [] 
  isUpdateMode: boolean = false
  ingredient_grams = new FormControl(0, [
    Validators.required,
  ]);
  ingredient_price = new FormControl(0, [
    Validators.required,
  ]);
  ingredient_type = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);
  addIngredientForm = new FormGroup({
    ingredient_grams: this.ingredient_grams,
    ingredient_price: this.ingredient_price,
    ingredient_type: this.ingredient_type
  }, [])


  // Class/Component attributes:
  constructor(private ingredientService: IngredientsService) { }

  ngOnInit(): void {
    this.addIngredientForm.reset()
  }


  // Methods:
  showTableFunc() {
    this.showTable = !this.showTable
  }

  async listOfIngredients() {
    this.showTableFunc()

    try {
      this.res$ = await this.ingredientService.GetAllIngredients()
      this.res$.subscribe((data: any) => {
        this.listIngredients = data.object
      })
    } 
    catch (err) {
      console.error(err);
      return 
    }
  }

  async getIngredient(id: string) {
    this.isUpdateMode = true
    this.ingredientId = id
    
    try {
      this.res$ = await this.ingredientService.GetIngredientById(id)
      this.res$.subscribe((data: any) => {
        this.addIngredientForm.patchValue({
          ingredient_grams: data.object.ingredientGrams,
          ingredient_price: data.object.ingredientPrice,
          ingredient_type: data.object.ingredientType
        })
      })
    } 
    catch (err) {
      console.error(err);
      return 
    }
  }

  async addOrUpdateIngredient() {
    try {
      let dataIngredient: ISaladIngredientModel = {
        ingredientGrams: this.addIngredientForm.value.ingredient_grams as number,
        ingredientPrice: this.addIngredientForm.value.ingredient_price as number,
        ingredientType: this.addIngredientForm.value.ingredient_type as string,
      }  

      // Update
      if(this.ingredientId) {
        dataIngredient.id = this.ingredientId
        this.res$ = await this.ingredientService.UpdateIngredient(dataIngredient)
      } else { // Insert
        this.res$ = await this.ingredientService.AddIngredient(dataIngredient)  
      }

      this.res$.pipe(
        delay(1000),
        map((data: IResponse) => {
          if(data.success) {
            this.successToast = true
          } else {
            this.failureToast = true
          }
        }),
        delay(3000),
        map(data => this.successToast = false),
        map(data => this.failureToast = false)
      )
      .subscribe()

      this.showTable = false
      this.isUpdateMode = false

      this.ngOnInit()
    } 
    catch (err) {
      console.error(err);
      return 
    }
  }
}
