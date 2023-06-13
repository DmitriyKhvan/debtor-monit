import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-insurance-debt-accompaniment',
  templateUrl: './insurance-debt-accompaniment.component.html',
  styleUrls: [
    '../../../credit-info-item/components/insurance-debt/insurance-debt.component.scss',
    './insurance-debt-accompaniment.component.scss',
  ],
})
export class InsuranceDebtAccompanimentComponent {
  @Input() userInfo: any;
}
