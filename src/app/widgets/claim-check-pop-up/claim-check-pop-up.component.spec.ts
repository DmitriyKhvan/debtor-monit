import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimCheckPopUpComponent } from './claim-check-pop-up.component';

describe('ClaimCheckPopUpComponent', () => {
  let component: ClaimCheckPopUpComponent;
  let fixture: ComponentFixture<ClaimCheckPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimCheckPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimCheckPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
