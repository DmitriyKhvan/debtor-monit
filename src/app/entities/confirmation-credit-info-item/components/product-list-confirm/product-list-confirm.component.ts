import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list-confirm',
  templateUrl: './product-list-confirm.component.html',
  styleUrls: ['./product-list-confirm.component.scss'],
})
export class ProductListConfirmComponent {
  @Input() products = [];
}
