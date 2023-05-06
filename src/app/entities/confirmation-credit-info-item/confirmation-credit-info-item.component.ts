import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-confirmation-credit-info-item',
  templateUrl: './confirmation-credit-info-item.component.html',
  styleUrls: ['./confirmation-credit-info-item.component.scss'],
})
export class ConfirmationCreditInfoItemComponent {
  @Input() userInfo: any;

  tab = 'info';

  toggleTab(tabName: string) {
    this.tab = tabName;
  }
}
