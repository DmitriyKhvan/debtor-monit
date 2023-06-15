import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInfoRequestComponent } from './header-info-request.component';

describe('HeaderInfoRequestComponent', () => {
  let component: HeaderInfoRequestComponent;
  let fixture: ComponentFixture<HeaderInfoRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderInfoRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderInfoRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
