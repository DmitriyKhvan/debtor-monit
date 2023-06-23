import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompanimentUserTimeItemComponent } from './accompaniment-user-time-item.component';

describe('AccompanimentUserTimeItemComponent', () => {
  let component: AccompanimentUserTimeItemComponent;
  let fixture: ComponentFixture<AccompanimentUserTimeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccompanimentUserTimeItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccompanimentUserTimeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
