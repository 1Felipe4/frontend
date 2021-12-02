import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddIngredientComponent } from './components/add-ingredient/add-ingredient.component';
import { AddIngredientTypeComponent } from './components/add-ingredient-type/add-ingredient-type.component';
import { AddPlateComponent } from './components/add-plate/add-plate.component';
import { IngredientDetailsComponent } from './components/ingredient-details/ingredient-details.component';
import { IngredientTypeDetailsComponent } from './components/ingredient-type-details/ingredient-type-details.component';
import { PlateDetailsComponent } from './components/plate-details/plate-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IngredientsListComponent } from './components/ingredients-list/ingredients-list.component';
import { IngredientTypesListComponent } from './components/ingredient-types-list/ingredient-types-list.component';
import { PlatesListComponent } from './components/plates-list/plates-list.component';
import {DragDropModule} from '@angular/cdk/drag-drop'
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    AddIngredientComponent,
    AddIngredientTypeComponent,
    AddPlateComponent,
    IngredientDetailsComponent,
    IngredientTypeDetailsComponent,
    PlateDetailsComponent,
    IngredientsListComponent,
    IngredientTypesListComponent,
    PlatesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
