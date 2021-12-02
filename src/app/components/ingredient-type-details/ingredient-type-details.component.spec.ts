import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientTypeDetailsComponent } from './ingredient-type-details.component';

describe('IngredientTypeDetailsComponent', () => {
  let component: IngredientTypeDetailsComponent;
  let fixture: ComponentFixture<IngredientTypeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientTypeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
