import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredient(ingredientAdded: Ingredient) {
        this.ingredients.push(ingredientAdded);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
    addIngredients(ingredientsList:Ingredient[]){
      this.ingredients.push(...ingredientsList);
      this.ingredientsChanged.emit(this.ingredients.slice());
    }
}