import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCallsAccompanimentComponent } from './history-calls-accompaniment.component';

describe('HistoryCallsAccompanimentComponent', () => {
  let component: HistoryCallsAccompanimentComponent;
  let fixture: ComponentFixture<HistoryCallsAccompanimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryCallsAccompanimentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryCallsAccompanimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
