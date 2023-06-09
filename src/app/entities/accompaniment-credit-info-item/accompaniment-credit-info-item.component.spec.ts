import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompanimentCreditInfoItemComponent } from './accompaniment-credit-info-item.component';

describe('AccompanimentCreditInfoItemComponent', () => {
  let component: AccompanimentCreditInfoItemComponent;
  let fixture: ComponentFixture<AccompanimentCreditInfoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccompanimentCreditInfoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccompanimentCreditInfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
