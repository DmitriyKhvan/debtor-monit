import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompanimentUserComponent } from './accompaniment-user.component';

describe('AccompanimentUserComponent', () => {
  let component: AccompanimentUserComponent;
  let fixture: ComponentFixture<AccompanimentUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccompanimentUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccompanimentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
