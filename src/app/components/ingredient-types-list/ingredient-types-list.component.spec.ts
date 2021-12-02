import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientTypesListComponent } from './ingredient-types-list.component';

describe('IngredientTypesListComponent', () => {
  let component: IngredientTypesListComponent;
  let fixture: ComponentFixture<IngredientTypesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientTypesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
