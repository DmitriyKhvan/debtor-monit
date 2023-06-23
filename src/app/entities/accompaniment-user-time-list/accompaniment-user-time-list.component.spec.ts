import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompanimentUserTimeListComponent } from './accompaniment-user-time-list.component';

describe('AccompanimentUserTimeListComponent', () => {
  let component: AccompanimentUserTimeListComponent;
  let fixture: ComponentFixture<AccompanimentUserTimeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccompanimentUserTimeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccompanimentUserTimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
