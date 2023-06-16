import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCardFormComponent } from './change-card-form.component';

describe('ChangeCardFormComponent', () => {
  let component: ChangeCardFormComponent;
  let fixture: ComponentFixture<ChangeCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeCardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
