import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientInfoPopUpComponent } from './add-client-info-pop-up.component';

describe('AddClientInfoPopUpComponent', () => {
  let component: AddClientInfoPopUpComponent;
  let fixture: ComponentFixture<AddClientInfoPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddClientInfoPopUpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddClientInfoPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
