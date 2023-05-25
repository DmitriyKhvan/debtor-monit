import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeclosureComponent } from './foreclosure-tabs.component';

describe('ForeclosureComponent', () => {
  let component: ForeclosureComponent;
  let fixture: ComponentFixture<ForeclosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForeclosureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ForeclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
