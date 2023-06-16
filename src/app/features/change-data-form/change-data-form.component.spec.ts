import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDataFormComponent } from './change-data-form.component';

describe('ChangeDataFormComponent', () => {
  let component: ChangeDataFormComponent;
  let fixture: ComponentFixture<ChangeDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDataFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
