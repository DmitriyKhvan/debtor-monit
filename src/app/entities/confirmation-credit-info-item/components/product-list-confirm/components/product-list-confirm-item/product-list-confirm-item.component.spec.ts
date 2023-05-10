import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListConfirmItemComponent } from './product-list-confirm-item.component';

describe('ProductListConfirmItemComponent', () => {
  let component: ProductListConfirmItemComponent;
  let fixture: ComponentFixture<ProductListConfirmItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListConfirmItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListConfirmItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
