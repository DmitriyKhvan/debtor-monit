import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompanimentCreditListComponent } from './accompaniment-credit-list.component';

describe('AccompanimentCreditListComponent', () => {
  let component: AccompanimentCreditListComponent;
  let fixture: ComponentFixture<AccompanimentCreditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccompanimentCreditListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccompanimentCreditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
