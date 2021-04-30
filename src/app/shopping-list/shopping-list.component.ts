import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] =[];
  constructor(private shoppingList:ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingList.getIngredients();
    this.shoppingList.ingredientsChanged.subscribe(
      (ingredient:Ingredient[]) => {
        this.ingredients = ingredient;
      }
    )
  }
  onIngredientAdded(ingredientAdded: Ingredient) {
    this.shoppingList.addIngredient(ingredientAdded);
  }
}
