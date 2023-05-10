import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralUserInfoConfirmationCreditComponent } from './general-user-info-confirmation-credit.component';

describe('GeneralUserInfoConfirmationCreditComponent', () => {
  let component: GeneralUserInfoConfirmationCreditComponent;
  let fixture: ComponentFixture<GeneralUserInfoConfirmationCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralUserInfoConfirmationCreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralUserInfoConfirmationCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
