import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarForeclosureComponent } from './sidebar-foreclosure.component';

describe('SidebarForeclosureComponent', () => {
  let component: SidebarForeclosureComponent;
  let fixture: ComponentFixture<SidebarForeclosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarForeclosureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarForeclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
