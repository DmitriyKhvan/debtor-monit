import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompanimentUserListComponent } from './accompaniment-user-list.component';

describe('AccompanimentUserListComponent', () => {
  let component: AccompanimentUserListComponent;
  let fixture: ComponentFixture<AccompanimentUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccompanimentUserListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccompanimentUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
