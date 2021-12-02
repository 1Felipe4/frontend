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
  selector: 'app-plate-details',
  templateUrl: './plate-details.component.html',
  styleUrls: ['./plate-details.component.scss']
})
export class PlateDetailsComponent implements OnInit {

  currentPlate: Plate = {
    ingredients:[]
  };
  ingredients: Ingredient[] = [];
  
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
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }




}