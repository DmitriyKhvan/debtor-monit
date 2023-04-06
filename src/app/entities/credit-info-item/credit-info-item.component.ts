import { Component } from '@angular/core';

@Component({
  selector: 'app-credit-info-item',
  templateUrl: './credit-info-item.component.html',
  styleUrls: ['./credit-info-item.component.scss'],
})
export class CreditInfoItemComponent {
  tab = 'info';

  toggleTab(tabName: string) {
    this.tab = tabName;
  }
}
