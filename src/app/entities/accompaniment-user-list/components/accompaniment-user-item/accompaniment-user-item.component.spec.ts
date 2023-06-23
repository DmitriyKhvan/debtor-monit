import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompanimentUserItemComponent } from './accompaniment-user-item.component';

describe('AccompanimentUserItemComponent', () => {
  let component: AccompanimentUserItemComponent;
  let fixture: ComponentFixture<AccompanimentUserItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccompanimentUserItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccompanimentUserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
