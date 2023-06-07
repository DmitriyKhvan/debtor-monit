import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsEmptyComponent } from './statistics-empty.component';

describe('StatisticsEmptyComponent', () => {
  let component: StatisticsEmptyComponent;
  let fixture: ComponentFixture<StatisticsEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsEmptyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
