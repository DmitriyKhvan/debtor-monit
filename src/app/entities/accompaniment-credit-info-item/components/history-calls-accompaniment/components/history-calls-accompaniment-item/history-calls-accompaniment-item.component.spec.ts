import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCallsAccompanimentItemComponent } from './history-calls-accompaniment-item.component';

describe('HistoryCallsAccompanimentItemComponent', () => {
  let component: HistoryCallsAccompanimentItemComponent;
  let fixture: ComponentFixture<HistoryCallsAccompanimentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryCallsAccompanimentItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryCallsAccompanimentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
