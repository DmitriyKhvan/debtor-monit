import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInfoAccompanimentUserComponent } from './general-info-accompaniment-user.component';

describe('GeneralInfoAccompanimentUserComponent', () => {
  let component: GeneralInfoAccompanimentUserComponent;
  let fixture: ComponentFixture<GeneralInfoAccompanimentUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInfoAccompanimentUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralInfoAccompanimentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
