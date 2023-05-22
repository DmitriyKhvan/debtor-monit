import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-client-info-confirm',
  templateUrl: './client-info-confirm.component.html',
  styleUrls: [
    '../installment-plan-confirm/installment-plan-confirm.component.scss',
    './client-info-confirm.component.scss',
  ],
})
export class ClientInfoConfirmComponent {
  @Input() userInfo: any;
}
