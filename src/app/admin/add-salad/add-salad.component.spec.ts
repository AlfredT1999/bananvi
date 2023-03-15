import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSaladComponent } from './add-salad.component';

describe('AddSaladComponent', () => {
  let component: AddSaladComponent;
  let fixture: ComponentFixture<AddSaladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSaladComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSaladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
