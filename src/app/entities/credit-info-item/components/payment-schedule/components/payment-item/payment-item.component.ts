import { Component, Input } from '@angular/core';
import { Status } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-payment-item',
  templateUrl: './payment-item.component.html',
  styleUrls: [
    '../../payment-schedule.component.scss',
    './payment-item.component.scss',
  ],
})
export class PaymentItemComponent {
  @Input() schedule: any;
  @Input() status: Status | undefined;
}
