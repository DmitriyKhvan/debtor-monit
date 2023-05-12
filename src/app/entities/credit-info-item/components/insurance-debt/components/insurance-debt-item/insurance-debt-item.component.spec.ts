import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceDebtItemComponent } from './insurance-debt-item.component';

describe('InsuranceDebtItemComponent', () => {
  let component: InsuranceDebtItemComponent;
  let fixture: ComponentFixture<InsuranceDebtItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceDebtItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceDebtItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
