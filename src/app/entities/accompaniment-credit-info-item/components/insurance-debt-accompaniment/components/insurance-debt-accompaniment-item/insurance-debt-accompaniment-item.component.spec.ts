import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceDebtAccompanimentItemComponent } from './insurance-debt-accompaniment-item.component';

describe('InsuranceDebtAccompanimentItemComponent', () => {
  let component: InsuranceDebtAccompanimentItemComponent;
  let fixture: ComponentFixture<InsuranceDebtAccompanimentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceDebtAccompanimentItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceDebtAccompanimentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
