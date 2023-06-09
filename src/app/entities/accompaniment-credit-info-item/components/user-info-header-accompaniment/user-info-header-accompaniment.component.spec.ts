import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoHeaderAccompanimentComponent } from './user-info-header-accompaniment.component';

describe('UserInfoHeaderAccompanimentComponent', () => {
  let component: UserInfoHeaderAccompanimentComponent;
  let fixture: ComponentFixture<UserInfoHeaderAccompanimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoHeaderAccompanimentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInfoHeaderAccompanimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
