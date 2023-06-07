import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsFormPopUpComponent } from './statistics-form-pop-up.component';

describe('StatisticsFormPopUpComponent', () => {
  let component: StatisticsFormPopUpComponent;
  let fixture: ComponentFixture<StatisticsFormPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsFormPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsFormPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
