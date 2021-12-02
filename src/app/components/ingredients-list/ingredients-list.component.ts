import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit {
  ingredients?: Ingredient[];
  currentIngredient?: Ingredient;
  currentIndex = -1;
  name: string = '';

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.retrieveIngredients();
  }

  retrieveIngredients(): void {
    this.ingredientService.getAll()
      .subscribe(
        data => {
          this.ingredients = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveIngredients();
    this.currentIngredient = undefined;
    this.currentIndex = -1;
  }

  setActiveIngredient(ingredient: Ingredient, index: number): void {
    this.currentIngredient = ingredient;
    this.currentIndex = index;
  }

  removeAllIngredients(): void {
    this.ingredientService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    this.ingredientService.findByName(this.name)
      .subscribe(
        data => {
          this.ingredients = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}