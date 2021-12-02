import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss']
})
export class AddIngredientComponent implements OnInit {
  ingredient: Ingredient = {
    name: '',
    type: undefined,
};
  submitted = false;

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
  }

  saveIngredient(): void {
    const data = {
      name: this.ingredient.name,
      type: this.ingredient.type
    };

    this.ingredientService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newIngredient(): void {
    this.submitted = false;
    this.ingredient = {
      name: '',
      type: undefined,
    };
  }

}