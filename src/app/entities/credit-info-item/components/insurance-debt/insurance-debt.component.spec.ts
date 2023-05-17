import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceDebtComponent } from './insurance-debt.component';

describe('InsuranceDebtComponent', () => {
  let component: InsuranceDebtComponent;
  let fixture: ComponentFixture<InsuranceDebtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceDebtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceDebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
