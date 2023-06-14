import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompanimentCreditComponent } from './accompaniment-credit.component';

describe('AccompanimentCreditComponent', () => {
  let component: AccompanimentCreditComponent;
  let fixture: ComponentFixture<AccompanimentCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccompanimentCreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccompanimentCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
