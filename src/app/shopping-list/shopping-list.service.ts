import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Potatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // when the ingredients list changes, so that the output reflects this
    // a new splice of the ingredients is taken.
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // not a great solution as this would emit a lot of events
    // ingredients.forEach((ingredient) => {
    //   this.addIngredient(ingredient);
    // });
    // the spread operator ... separates arrays as push won't take arrays
    this.ingredients.push(...ingredients);
    // as the ingredient have changed, need to get the new list
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
