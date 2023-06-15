import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInfoRequestComponent } from './general-info-request.component';

describe('GeneralInfoRequestComponent', () => {
  let component: GeneralInfoRequestComponent;
  let fixture: ComponentFixture<GeneralInfoRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInfoRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralInfoRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
