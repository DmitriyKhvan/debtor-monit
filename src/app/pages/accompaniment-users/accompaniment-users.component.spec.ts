import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompanimentUsersComponent } from './accompaniment-users.component';

describe('AccompanimentUsersComponent', () => {
  let component: AccompanimentUsersComponent;
  let fixture: ComponentFixture<AccompanimentUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccompanimentUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccompanimentUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
