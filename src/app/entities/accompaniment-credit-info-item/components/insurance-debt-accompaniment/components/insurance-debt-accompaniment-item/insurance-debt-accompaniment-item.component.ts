import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-insurance-debt-accompaniment-item',
  templateUrl: './insurance-debt-accompaniment-item.component.html',
  styleUrls: [
    '../../../../../credit-info-item/components/insurance-debt/insurance-debt.component.scss',
    './insurance-debt-accompaniment-item.component.scss',
  ],
})
export class InsuranceDebtAccompanimentItemComponent {
  @Input() insurance: any;

  dictionary: any = {
    Успешно: 'success',
    Отменен: 'danger',
    'Транзакция отменена': 'danger',
  };
}
