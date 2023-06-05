import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHistoryCallsComponent } from './get-history-calls.component';

describe('GetHistoryCallsComponent', () => {
  let component: GetHistoryCallsComponent;
  let fixture: ComponentFixture<GetHistoryCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetHistoryCallsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetHistoryCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
