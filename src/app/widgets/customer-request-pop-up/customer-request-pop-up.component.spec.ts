import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRequestPopUpComponent } from './customer-request-pop-up.component';

describe('CustomerRequestPopUpComponent', () => {
  let component: CustomerRequestPopUpComponent;
  let fixture: ComponentFixture<CustomerRequestPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRequestPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRequestPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
