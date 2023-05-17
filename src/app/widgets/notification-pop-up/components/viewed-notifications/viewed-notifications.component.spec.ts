import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewedNotificationComponent } from './viewed-notifications.component';

describe('ViewedNotificationComponent', () => {
  let component: ViewedNotificationComponent;
  let fixture: ComponentFixture<ViewedNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewedNotificationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewedNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
