import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationCreditListComponent } from './confirmation-credit-list.component';

describe('ConfirmationCreditListComponent', () => {
  let component: ConfirmationCreditListComponent;
  let fixture: ComponentFixture<ConfirmationCreditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationCreditListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationCreditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
