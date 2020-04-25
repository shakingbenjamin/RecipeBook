import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})

export class ShoppingEditComponent implements OnInit {
  // old element references
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  // no longer needed as shoppinglistservice takes over from @output makes the event heard from outside
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAddItem(form: NgForm) {
    // old implementation of input references
    // const ingredientName = this.nameInputRef.nativeElement.value;
    // const ingredientAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
