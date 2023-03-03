import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsTermsComponent } from './conditions-terms.component';

describe('ConditionsTermsComponent', () => {
  let component: ConditionsTermsComponent;
  let fixture: ComponentFixture<ConditionsTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionsTermsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionsTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
