import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  //so it can be set from outside the component with [recipe] in the html
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
