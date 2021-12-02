import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngredientTypeComponent } from './add-ingredient-type.component';

describe('AddIngredientTypeComponent', () => {
  let component: AddIngredientTypeComponent;
  let fixture: ComponentFixture<AddIngredientTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIngredientTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIngredientTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
