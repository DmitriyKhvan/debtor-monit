import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/shared/api/credit.service';
import { Status } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-confirmation-credit-item',
  templateUrl: './confirmation-credit-item.component.html',
  styleUrls: [
    './confirmation-credit-item.component.scss',
    '../../confirmation-credit-list.component.scss',
  ],
})
export class ConfirmationCreditItemComponent {
  @Input() credit: any;
  // @Input() status: Status = { code: 0, name: '' };
  @Input() status: Status | undefined;
  currentId: number | null = null;

  statusStyleDic: any = {
    1: 'default',
    2: 'success',
    3: 'danger',
  };

  statusNameDic: any = {
    1: 'Новая заявка',
    2: 'Потверждено',
    3: 'Отказано',
  };

  constructor(public apiService: ApiService) {}
}
