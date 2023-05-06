import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationCreditItemComponent } from './confirmation-credit-item.component';

describe('ConfirmationCreditItemComponent', () => {
  let component: ConfirmationCreditItemComponent;
  let fixture: ComponentFixture<ConfirmationCreditItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationCreditItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationCreditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
