import { Component } from '@angular/core';
import { ApiService } from 'src/app/shared/api/credit.service';

@Component({
  selector: 'app-calculation-product-list',
  templateUrl: './calculation-product-list.component.html',
  styleUrls: ['./calculation-product-list.component.scss'],
})
export class CalculationProductListComponent {
  constructor(public apiService: ApiService) {}
}
