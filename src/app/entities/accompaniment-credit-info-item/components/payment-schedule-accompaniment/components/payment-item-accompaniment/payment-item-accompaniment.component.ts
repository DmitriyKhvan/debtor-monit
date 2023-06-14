import { Component, Input } from '@angular/core';
import { Status } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-payment-item-accompaniment',
  templateUrl: './payment-item-accompaniment.component.html',
  styleUrls: [
    '../../../../../credit-info-item/components/payment-schedule/payment-schedule.component.scss',
    './payment-item-accompaniment.component.scss',
  ],
})
export class PaymentItemAccompanimentComponent {
  @Input() schedule: any;
  @Input() status: Status | undefined;
}
