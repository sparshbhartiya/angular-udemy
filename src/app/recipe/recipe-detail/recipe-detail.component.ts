import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeItem : Recipe;
  constructor(private recipeService : RecipeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params : Params) => {
        let id = +params["id"];
        this.recipeItem = this.recipeService.getRecipe(id);
      }
    )
  }
  onAddedToShoppingList(){
    this.recipeService.onIngredientsToShoppingList(this.recipeItem.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(["edit"],{relativeTo:this.route})
  }
}
