import { Component, OnInit } from '@angular/core';
import { IngredientType } from 'src/app/models/ingredient-type.model';
import { IngredientTypeService } from 'src/app/services/ingredient-type.service';

@Component({
  selector: 'app-add-ingredient-type',
  templateUrl: './add-ingredient-type.component.html',
  styleUrls: ['./add-ingredient-type.component.scss']
})
export class AddIngredientTypeComponent implements OnInit {
  ingredientType: IngredientType = {
    name: '',
  };
  submitted = false;


  constructor(private ingredientTypeService: IngredientTypeService) { }
  ngOnInit(): void {
  }

  saveIngredientType(): void {
    const data = {
      name: this.ingredientType.name,
    };

    this.ingredientTypeService.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  newIngredientType(): void {
    this.ingredientType = {
      name: '',
    };
  }

}