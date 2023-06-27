import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoHeaderAccompanimentUserComponent } from './user-info-header-accompaniment-user.component';

describe('UserInfoHeaderAccompanimentUserComponent', () => {
  let component: UserInfoHeaderAccompanimentUserComponent;
  let fixture: ComponentFixture<UserInfoHeaderAccompanimentUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoHeaderAccompanimentUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInfoHeaderAccompanimentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
