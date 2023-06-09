import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInfoAccompanimentComponent } from './general-info-accompaniment.component';

describe('GeneralInfoAccompanimentComponent', () => {
  let component: GeneralInfoAccompanimentComponent;
  let fixture: ComponentFixture<GeneralInfoAccompanimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralInfoAccompanimentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralInfoAccompanimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
