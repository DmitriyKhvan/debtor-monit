import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: [
    '../../product-list.component.scss',
    './product-item.component.scss',
  ],
})
export class ProductItemComponent {
  @Input() idx: number | undefined;
  @Input() product: any;
}
