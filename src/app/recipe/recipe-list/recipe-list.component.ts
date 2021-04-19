import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe("Test Recipe","Test","https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg"),
    new Recipe("Test Recipe","Test","https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg"),

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
