import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list-confirm-item',
  templateUrl: './product-list-confirm-item.component.html',
  styleUrls: [
    '../../product-list-confirm.component.scss',
    './product-list-confirm-item.component.scss',
  ],
})
export class ProductListConfirmItemComponent {
  @Input() idx: number | undefined;
  @Input() product: any;
}
