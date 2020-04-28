import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // access a specific part of the form to adapt in the component
  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  itemSelected = false;
  selectedItemIndex: number;
  selectedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    // triggered when editing
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.selectedItemIndex = index;
        this.itemSelected = true;
        this.selectedItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.selectedItem.name,
          amount: this.selectedItem.amount,
        });
      }
    );
  }

  onSubmitItem(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.itemSelected){
      this.shoppingListService.updateIngredient(ingredient, this.selectedItemIndex);
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
    this.itemSelected = false;
    form.reset();
  }

  onDelete(){
    this.onClear();
    this.shoppingListService.deleteIngredient(this.selectedItemIndex);
  }

  onClear() {
    this.shoppingListForm.reset();
    this.itemSelected = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
