import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';

export class ShoppingListService {
  // subject to replace emitters
  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Potatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(updatedIngredient: Ingredient, index: number) {
    this.ingredients[index] = updatedIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // when the ingredients list changes, so that the output reflects this
    // a new splice of the ingredients is taken.
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // not a great solution as this would emit a lot of events
    // ingredients.forEach((ingredient) => {
    //   this.addIngredient(ingredient);
    // });
    // the spread operator ... separates arrays as push won't take arrays
    this.ingredients.push(...ingredients);
    // as the ingredient have changed, need to get the new list
    this.ingredientsChanged.next(this.ingredients.slice());
    // subject uses next instead of emit that event emitter uses
    // this.ingredientsChanged.emit(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    // delete one item from array at specified index
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
