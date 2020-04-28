import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  //   // subscribing to get notified of any changes, accepting a recipe from the event
  //   // all handled in the service for cross component communication making it
  //   // much leaner codewise as well as all components using the same instance
  //   // of a service through dependency injection
  //   this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
  //     this.selectedRecipe = recipe;
  //   });
  }
}
