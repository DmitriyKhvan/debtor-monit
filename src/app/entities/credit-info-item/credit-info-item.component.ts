import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-credit-info-item',
  templateUrl: './credit-info-item.component.html',
  styleUrls: ['./credit-info-item.component.scss'],
})
export class CreditInfoItemComponent {
  @Input() userInfo: any;

  tab = 'info';

  toggleTab(tabName: string) {
    this.tab = tabName;
  }
}
