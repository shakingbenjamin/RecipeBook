import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeItemSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('test recipe',
      'this is a test description',
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80'),
      new Recipe('another test recipe',
      'this is a test description',
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeItemSelected.emit(recipe);
  }
}
