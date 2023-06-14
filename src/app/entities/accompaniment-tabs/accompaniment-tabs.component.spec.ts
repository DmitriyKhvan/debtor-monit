import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompanimentTabsComponent } from './accompaniment-tabs.component';

describe('AccompanimentTabsComponent', () => {
  let component: AccompanimentTabsComponent;
  let fixture: ComponentFixture<AccompanimentTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccompanimentTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccompanimentTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
