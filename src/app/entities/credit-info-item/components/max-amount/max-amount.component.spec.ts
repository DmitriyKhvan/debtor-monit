import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxAmountComponent } from './max-amount.component';

describe('MaxAmountComponent', () => {
  let component: MaxAmountComponent;
  let fixture: ComponentFixture<MaxAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
