import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCallsPopUpComponent } from './history-calls-pop-up.component';

describe('HistoryCallsPopUpComponent', () => {
  let component: HistoryCallsPopUpComponent;
  let fixture: ComponentFixture<HistoryCallsPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryCallsPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryCallsPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
