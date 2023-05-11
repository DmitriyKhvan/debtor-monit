import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCommentPopUpComponent } from './confirm-comment-pop-up.component';

describe('ConfirmCommentPopUpComponent', () => {
  let component: ConfirmCommentPopUpComponent;
  let fixture: ComponentFixture<ConfirmCommentPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmCommentPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmCommentPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
