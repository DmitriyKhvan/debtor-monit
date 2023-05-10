import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListConfirmComponent } from './product-list-confirm.component';

describe('ProductListConfirmComponent', () => {
  let component: ProductListConfirmComponent;
  let fixture: ComponentFixture<ProductListConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
