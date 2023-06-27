import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompanimentUserInfoItemComponent } from './accompaniment-user-info-item.component';

describe('AccompanimentUserInfoItemComponent', () => {
  let component: AccompanimentUserInfoItemComponent;
  let fixture: ComponentFixture<AccompanimentUserInfoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccompanimentUserInfoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccompanimentUserInfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
