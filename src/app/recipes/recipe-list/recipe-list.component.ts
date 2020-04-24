import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    // relative path as already in /recipes so just need to append 'new'
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
