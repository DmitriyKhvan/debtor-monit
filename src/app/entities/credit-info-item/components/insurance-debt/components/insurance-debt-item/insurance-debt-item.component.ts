import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-insurance-debt-item',
  templateUrl: './insurance-debt-item.component.html',
  styleUrls: [
    '../../insurance-debt.component.scss',
    './insurance-debt-item.component.scss',
  ],
})
export class InsuranceDebtItemComponent {
  @Input() insurance: any;

  dictionary: any = {
    Успешно: 'success',
    Отменен: 'danger',
    'Транзакция отменена': 'danger',
  };
}
