import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableIngredientsComponent } from './table-ingredients.component';

describe('TableIngredientsComponent', () => {
  let component: TableIngredientsComponent;
  let fixture: ComponentFixture<TableIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableIngredientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
