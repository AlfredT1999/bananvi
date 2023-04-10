import ISaladIngredientModel from "./ISaladIngredientModel"

export default interface ISalad {
    id?: string
    saladTypeTitle: string
    saladTypeDescription: string
    saladTypePrice: number,
    ingredients?: ISaladIngredientModel[] 
}