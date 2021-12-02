import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';
import { IngredientDetailsComponent } from './components/ingredient-details/ingredient-details.component';
import { AddIngredientComponent } from './components/add-ingredient/add-ingredient.component';
import { IngredientTypesListComponent } from './components/ingredient-types-list/ingredient-types-list.component';
import { IngredientTypeDetailsComponent } from './components/ingredient-type-details/ingredient-type-details.component';
import { AddIngredientTypeComponent } from './components/add-ingredient-type/add-ingredient-type.component';
import { PlatesListComponent } from './components/plates-list/plates-list.component';
import { PlateDetailsComponent } from './components/plate-details/plate-details.component';
import { AddPlateComponent } from './components/add-plate/add-plate.component';

const routes: Routes = [
  { path: '', redirectTo: 'ingredients', pathMatch: 'full' },
  { path: 'ingredients', component: IngredientsListComponent },
  { path: 'ingredients/:id', component: IngredientDetailsComponent },
  { path: 'add-ingredient', component: AddIngredientComponent },
  { path: 'ingredient-types', component: IngredientTypesListComponent },
  { path: 'ingredient-types/:id', component: IngredientTypeDetailsComponent },
  { path: 'add-ingredient-type', component: AddIngredientTypeComponent },
  { path: 'plates', component: PlatesListComponent },
  { path: 'plates/:id', component: PlateDetailsComponent },
  { path: 'add-plate', component: AddPlateComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
