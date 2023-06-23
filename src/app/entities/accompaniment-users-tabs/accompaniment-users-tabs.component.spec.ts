import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompanimentUsersTabsComponent } from './accompaniment-users-tabs.component';

describe('AccompanimentUsersTabsComponent', () => {
  let component: AccompanimentUsersTabsComponent;
  let fixture: ComponentFixture<AccompanimentUsersTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccompanimentUsersTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccompanimentUsersTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
