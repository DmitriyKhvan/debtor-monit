import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRequestsItemComponent } from './customer-requests-item.component';

describe('CustomerRequestsItemComponent', () => {
  let component: CustomerRequestsItemComponent;
  let fixture: ComponentFixture<CustomerRequestsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRequestsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRequestsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
