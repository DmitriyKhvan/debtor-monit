import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditInfoLayoutComponent } from './credit-info-layout.component';

describe('CreditInfoLayoutComponent', () => {
  let component: CreditInfoLayoutComponent;
  let fixture: ComponentFixture<CreditInfoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditInfoLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditInfoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
