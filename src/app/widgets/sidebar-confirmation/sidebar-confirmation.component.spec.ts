import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarConfirmationComponent } from './sidebar-confirmation.component';

describe('SidebarConfirmationComponent', () => {
  let component: SidebarConfirmationComponent;
  let fixture: ComponentFixture<SidebarConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
