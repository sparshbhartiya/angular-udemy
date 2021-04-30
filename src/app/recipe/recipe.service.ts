import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Samosa',
      'Samosa is an Indian snack in which boiled potatoes stuffing is filled inside flour(maida)',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg',
      [new Ingredient("Potato",2),new Ingredient("Chille",1)]
    ),
    new Recipe(
      'Boiled Rice and Dal',
      'Boiled rice is served with dal(pulse) which is very famous dish in north India',
      'https://i.dawn.com/primary/2019/05/5ccc2161d27b5.jpg',
      [new Ingredient("Rice",1),new Ingredient("Pulse",1)]
    ),
  ];
  constructor(private shoppingListService:ShoppingListService){}
  getRecipes() {
    return this.recipes.slice();
  }
  onIngredientsToShoppingList(ingredients:Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
  
}
