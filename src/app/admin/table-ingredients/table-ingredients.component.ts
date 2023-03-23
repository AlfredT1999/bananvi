import { Component, Input } from '@angular/core';
import ISaladIngredientModel from 'src/app/models/salads/ISaladIngredientModel';
import { IngredientsService } from 'src/app/services/ingredients.service';

@Component({
  selector: 'app-table-ingredients',
  templateUrl: './table-ingredients.component.html',
  styleUrls: ['./table-ingredients.component.css']
})
export class TableIngredientsComponent {
  res$!: any
  @Input() listIngredients!: ISaladIngredientModel[]
  @Input() isUpdateMode!: boolean 
  @Input() ingredientId!: string
  @Input() addIngredientForm!: any
  @Input() showTable!: boolean

  constructor(private ingredientService: IngredientsService) { }

  ngOnInit(): void {
  }

  showTableFunc() {
    this.showTable = !this.showTable
  }

  async listOfIngredients() {
    this.showTable = !this.showTable

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
}
