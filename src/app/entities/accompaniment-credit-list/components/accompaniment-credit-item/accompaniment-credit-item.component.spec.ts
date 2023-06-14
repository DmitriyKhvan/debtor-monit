import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompanimentCreditItemComponent } from './accompaniment-credit-item.component';

describe('AccompanimentCreditItemComponent', () => {
  let component: AccompanimentCreditItemComponent;
  let fixture: ComponentFixture<AccompanimentCreditItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccompanimentCreditItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccompanimentCreditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
