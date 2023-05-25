import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationTabsComponent } from './confirmation-tabs.component';

describe('ConfirmationTabsComponent', () => {
  let component: ConfirmationTabsComponent;
  let fixture: ComponentFixture<ConfirmationTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
