import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  private recipeUrl = 'https://recipebook-cc60d.firebaseio.com/recipes.json';
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    // put requests overwrite all data at specified location
    // in order for it to do anything there's got to be subscribe method
    this.http.put(this.recipeUrl, recipes).subscribe((response) => {
      console.log(response);
    });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(this.recipeUrl)
      // rxjs operator to handle recipes without ingredients
      .pipe(
        map((recipes) => {
          // javascript method to make sure each recipe in array of recipes has ingredientsß
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        // allows code to be executed without the data funneled through the observable to be altered
        tap(recipes => {
            this.recipeService.setRecipes(recipes);
        })
      );
  }
}
