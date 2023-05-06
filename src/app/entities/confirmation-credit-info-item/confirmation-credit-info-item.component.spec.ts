import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationCreditInfoItemComponent } from './confirmation-credit-info-item.component';

describe('ConfirmationCreditInfoItemComponent', () => {
  let component: ConfirmationCreditInfoItemComponent;
  let fixture: ComponentFixture<ConfirmationCreditInfoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationCreditInfoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationCreditInfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
