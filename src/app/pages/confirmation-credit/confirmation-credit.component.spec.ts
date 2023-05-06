import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationCreditComponent } from './confirmation-credit.component';

describe('ConfirmationCreditComponent', () => {
  let component: ConfirmationCreditComponent;
  let fixture: ComponentFixture<ConfirmationCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationCreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
