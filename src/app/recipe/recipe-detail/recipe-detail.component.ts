import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input('recipeItem') recipeItem : Recipe;
  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
  }
  onAddedToShoppingList(){
    this.recipeService.onIngredientsToShoppingList(this.recipeItem.ingredients);
  }

}
