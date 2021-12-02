import { Component, OnInit } from '@angular/core';
import { IngredientService } from 'src/app/services/ingredient.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient.model';
import { IngredientType } from 'src/app/models/ingredient-type.model';
import { IngredientTypeService } from 'src/app/services/ingredient-type.service';
import { AbstractControl, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Plate } from 'src/app/models/plate.model';
import { PlateService } from 'src/app/services/plate.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-add-plate',
  templateUrl: './add-plate.component.html',
  styleUrls: ['./add-plate.component.scss']
})
export class AddPlateComponent implements OnInit {

  currentPlate: Plate = {
    ingredients:[]
  };
  ingredients: Ingredient[] = [];
  balance: string = 'Empty'
  name: string = '';
  drop(event: CdkDragDrop<Ingredient[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.balance = this.ingredientService.getBalance(this.currentPlate)
  }

  menuDrop(event: CdkDragDrop<Ingredient[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if(this.currentPlate.ingredients.length < 5){
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.balance = this.ingredientService.getBalance(this.currentPlate)
  }



  constructor(
    private ingredientService: IngredientService,
    private PlateService: PlateService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveIngredients()
  }



  retrieveIngredients(): void {
    this.ingredientService.getAll()
      .subscribe(
        data => {
          this.ingredients = data;
          this.currentPlate.ingredients.forEach(plateIngredient => {
            this.ingredients.filter((ingredient) =>{
              return plateIngredient.pk != ingredient.pk
            })
          });
          console.log(data);
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
          this.currentPlate.ingredients.forEach(plateIngredient => {
          this.ingredients = this.ingredients.filter((ingredient) =>{
              return plateIngredient.pk != ingredient.pk
            })
          });
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }




}