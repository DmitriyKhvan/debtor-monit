import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAvatarPopUpComponent } from './show-avatar-pop-up.component';

describe('ShowAvatarPopUpComponent', () => {
  let component: ShowAvatarPopUpComponent;
  let fixture: ComponentFixture<ShowAvatarPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAvatarPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAvatarPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
