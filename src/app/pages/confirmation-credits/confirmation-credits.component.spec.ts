import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationCreditsComponent } from './confirmation-credits.component';

describe('ConfirmationCreditsComponent', () => {
  let component: ConfirmationCreditsComponent;
  let fixture: ComponentFixture<ConfirmationCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationCreditsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
