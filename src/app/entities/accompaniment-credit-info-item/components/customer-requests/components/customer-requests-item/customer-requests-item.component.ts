import { Component, Input } from '@angular/core';
import { FlagService } from 'src/app/shared/api/flag.sevice';

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

  constructor(private flagService: FlagService) {}

  getUserInfo(claimsId: number) {
    this.flagService.claimsId$.next(claimsId);
  }
}
