import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('recipeItem') recipeItem;
  @Input() index:number;
  ngOnInit(): void {
  }
  

}
