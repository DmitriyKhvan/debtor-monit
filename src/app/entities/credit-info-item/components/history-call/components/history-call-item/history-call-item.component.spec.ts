import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCallItemComponent } from './history-call-item.component';

describe('HistoryCallItemComponent', () => {
  let component: HistoryCallItemComponent;
  let fixture: ComponentFixture<HistoryCallItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryCallItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryCallItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
