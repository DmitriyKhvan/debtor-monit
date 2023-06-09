import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentScheduleAccompanimentComponent } from './payment-schedule-accompaniment.component';

describe('PaymentScheduleAccompanimentComponent', () => {
  let component: PaymentScheduleAccompanimentComponent;
  let fixture: ComponentFixture<PaymentScheduleAccompanimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentScheduleAccompanimentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentScheduleAccompanimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
