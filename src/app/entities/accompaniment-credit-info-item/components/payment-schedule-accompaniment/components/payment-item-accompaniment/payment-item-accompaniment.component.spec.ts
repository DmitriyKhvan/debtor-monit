import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentItemAccompanimentComponent } from './payment-item-accompaniment.component';

describe('PaymentItemAccompanimentComponent', () => {
  let component: PaymentItemAccompanimentComponent;
  let fixture: ComponentFixture<PaymentItemAccompanimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentItemAccompanimentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentItemAccompanimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
