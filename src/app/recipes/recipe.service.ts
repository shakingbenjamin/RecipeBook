import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from './recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

// so that a service can be injected into a service
@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  //private recipes: Recipe[] = [];
  // old hard coded test recipes
  private recipes: Recipe[] = [
    new Recipe(
      'Vege Curry',
      'A mild vegetable curry.',
  //tslint:disable-next-line: max-line-length
      'https://images.unsplash.com/photo-1582576163090-09d3b6f8a969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
      [
        new Ingredient('Rice', 5),
        new Ingredient('Potatoes', 3),
        new Ingredient('Peppers', 2),
        new Ingredient('Curry paste', 1),
      ]
    ),
    new Recipe(
      'Simple Spaghetti',
      'A simple but tasty spaghetti recipe',
  //tslint:disable-next-line: max-line-length
      'https://images.unsplash.com/photo-1521389508051-d7ffb5dc8a40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
      [
        new Ingredient('Spaghetti', 1),
        new Ingredient('Onion', 2),
        new Ingredient('Tinned tomatoes', 1),
        new Ingredient('Garlic Bread', 1),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    // without the slice method this would return a reference to the recipes
    // using slice without arguments will return a new array that's an exact copy of the one in this service
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
