import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import ISaladTypeModel from 'src/app/models/salads/ISaladTypeModel';
import { IngredientsService } from 'src/app/services/ingredients.service';
import { SaladHandlerService } from 'src/app/services/salad-handler.service';
import ISaladIngredientModel from '../../models/salads/ISaladIngredientModel'

@Component({
  selector: 'app-add-salad',
  templateUrl: './add-salad.component.html',
  styleUrls: ['./add-salad.component.css']
})
export class AddSaladComponent {
  isHidden: boolean = false
  listIngredients: ISaladIngredientModel[] = []
  res$!: any
  ingredientId: string = ''
  showTable: boolean = false
  saladTypePrice = new FormControl(0, [
    Validators.required,
  ]);
  saladTypeTitle = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);
  saladTypeDescription = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);
  addSaladForm = new FormGroup({
    saladTypePrice: this.saladTypePrice,
    saladTypeTitle: this.saladTypeTitle,
    saladTypeDescription: this.saladTypeDescription
  }, [])
  
  constructor(public ingredientsService: IngredientsService, private saladService: SaladHandlerService) {
    
  }

  ngOnInit(): void {
  }

  open() {
    this.isHidden = !this.isHidden
  }

  showTableFunc() {
    this.showTable = !this.showTable
  }

  async listOfIngredients() {
    this.showTableFunc()

    try {
      this.res$ = await this.ingredientsService.GetAllIngredients()
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
    this.ingredientId = id
    
    try {
      this.res$ = await this.ingredientsService.GetIngredientById(id)
      this.res$.subscribe((data: any) => {
        console.log("success")
      })
    } 
    catch (err) {
      console.error(err);
      return 
    }
  }

  async AddSalad() {
    let salad: ISaladTypeModel = {
      saladTypeTitle: this.addSaladForm.value.saladTypeTitle as string,
      saladTypeDescription: this.addSaladForm.value.saladTypeDescription as string,
      saladTypePrice: this.addSaladForm.value.saladTypePrice as number,
      ingredients: []
    }

    this.ingredientsService.listIngredientsToAdd.map(ingredient => {
      salad.ingredients!.push(ingredient.id!)
    })
    
    try {
      this.res$ = await this.saladService.AddSalad(salad as ISaladTypeModel)
      this.res$.subscribe((data: any) => {
        console.log(data);
      })
    } 
    catch (err) {
      console.error(err);
      return 
    }
  }
}
