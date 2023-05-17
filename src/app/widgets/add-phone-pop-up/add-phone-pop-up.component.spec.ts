import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhonePopUpComponent } from './add-phone-pop-up.component';

describe('AddPhonePopUpComponent', () => {
  let component: AddPhonePopUpComponent;
  let fixture: ComponentFixture<AddPhonePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPhonePopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPhonePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
