import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  // emitted event is no longer needed
  // @Output() recipeItemSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  // short hand way of declaring a property only in the arguments
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  // using service instead of listening and parsing through components
  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeItemSelected.emit(recipe);
  // }
}
