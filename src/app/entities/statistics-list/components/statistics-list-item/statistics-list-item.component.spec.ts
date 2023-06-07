import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsListItemComponent } from './statistics-list-item.component';

describe('StatisticsListItemComponent', () => {
  let component: StatisticsListItemComponent;
  let fixture: ComponentFixture<StatisticsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
