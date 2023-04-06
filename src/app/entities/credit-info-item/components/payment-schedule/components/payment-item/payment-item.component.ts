import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payment-item',
  templateUrl: './payment-item.component.html',
  styleUrls: [
    '../../payment-schedule.component.scss',
    './payment-item.component.scss',
  ],
})
export class PaymentItemComponent {
  @Input() payment: any;
}
