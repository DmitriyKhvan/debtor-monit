import { Component, Input } from '@angular/core';
import { ICalculationProduct } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-calculation-product-item',
  templateUrl: './calculation-product-item.component.html',
  styleUrls: [
    '../calculation-product-list.component.scss',
    './calculation-product-item.component.scss',
  ],
})
export class CalculationProductItemComponent {
  @Input() product: ICalculationProduct = {
    loanSum: 0,
    period: 0,
    productSum: '0',
  };
}
