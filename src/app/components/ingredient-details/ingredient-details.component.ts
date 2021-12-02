import { Component, OnInit } from '@angular/core';
import { IngredientService } from 'src/app/services/ingredient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient.model';
import { IngredientType } from 'src/app/models/ingredient-type.model';
import { IngredientTypeService } from 'src/app/services/ingredient-type.service';
import { AbstractControl, FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-ingredient-details',
  templateUrl: './ingredient-details.component.html',
  styleUrls: ['./ingredient-details.component.scss']
})
export class IngredientDetailsComponent implements OnInit {
  form!: FormGroup;

  currentIngredient: Ingredient = {
    name: '',
    type: undefined,
    pic: undefined,
    pk: undefined,
    img_url: undefined
  };
  currentIngredientType: IngredientType = {
    name: '',
    pk: undefined,
  };
  ingredientTypes?: IngredientType[]
  message = '';

  constructor(
    private formBuilder: FormBuilder,
    private ingredientService: IngredientService,
    private ingredientTypeService: IngredientTypeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getIngredient(this.route.snapshot.params.id);

    this.message = '';
    this.retrieveIngredientTypes()
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  getIngredient(id: string): void {
    this.ingredientService.get(id)
      .subscribe(
        data => {
          this.currentIngredient = data;
          console.log(data);
          this.form = this.formBuilder.group({
            name: [this.currentIngredient.name],
            type: [this.currentIngredient.type],
            // pic: [this.currentIngredient.pic]
          });

          this.ingredientTypeService.get(this.currentIngredient.type)
          .subscribe(
            data => {
              this.currentIngredientType = data;
              console.log(data);
            },
            error => {
              console.log(error);
            });

        },
        error => {
          console.log(error);
        });
    
  }

  retrieveIngredientTypes(): void {
    this.ingredientTypeService.getAll()
      .subscribe(
        data => {
          this.ingredientTypes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  updateIngredient(): void {
    let data = {
      name : this.currentIngredient.name,
      type: this.currentIngredient.type,
      pic: this.currentIngredient.pic
    }

    console.log(JSON.stringify(this.form.value));
    this.ingredientService.update(this.currentIngredient.pk, data)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteIngredient(): void {
    this.ingredientService.delete(this.currentIngredient.pk)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/ingredients']);
        },
        error => {
          console.log(error);
        });
  }
}