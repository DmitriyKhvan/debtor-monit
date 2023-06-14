import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceDebtAccompanimentComponent } from './insurance-debt-accompaniment.component';

describe('InsuranceDebtAccompanimentComponent', () => {
  let component: InsuranceDebtAccompanimentComponent;
  let fixture: ComponentFixture<InsuranceDebtAccompanimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceDebtAccompanimentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceDebtAccompanimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
