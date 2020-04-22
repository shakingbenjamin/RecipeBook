import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // so it can be used from outside the class within [recipe] in the markup
  @Input() recipe: Recipe;
  // so it can be listened to from outside by the parent recipe list
  // @Output() recipeSelected = new EventEmitter<void>();

  // inject recipe service
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected() {
    // this.recipeSelected.emit();

    // use the injected service to emit the input recipe
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
