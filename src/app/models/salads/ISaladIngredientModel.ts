export default interface ISaladIngredientModel {
    id?: string
    ingredientType: string
    ingredientGrams: number
    ingredientPrice: number
    ingredientActive?: boolean
    ingredientImage?: string
}