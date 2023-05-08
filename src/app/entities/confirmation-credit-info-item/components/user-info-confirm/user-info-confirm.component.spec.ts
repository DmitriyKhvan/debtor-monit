import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoConfirmComponent } from './user-info-confirm.component';

describe('UserInfoConfirmComponent', () => {
  let component: UserInfoConfirmComponent;
  let fixture: ComponentFixture<UserInfoConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInfoConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
