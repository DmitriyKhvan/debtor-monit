import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-requests-item',
  templateUrl: './customer-requests-item.component.html',
  styleUrls: [
    '../../customer-requests.component.scss',
    './customer-requests-item.component.scss',
  ],
})
export class CustomerRequestsItemComponent {
  @Input() credit: any;
}
