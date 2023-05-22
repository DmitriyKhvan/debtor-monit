import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAddClientInfoPopUpComponent } from './remove-add-client-info-pop-up.component';

describe('RemoveAddClientInfoPopUpComponent', () => {
  let component: RemoveAddClientInfoPopUpComponent;
  let fixture: ComponentFixture<RemoveAddClientInfoPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveAddClientInfoPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveAddClientInfoPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
