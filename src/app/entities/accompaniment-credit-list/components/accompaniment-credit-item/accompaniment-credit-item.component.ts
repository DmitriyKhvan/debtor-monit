import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/shared/api/credit.service';
import { Status } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-accompaniment-credit-item',
  templateUrl: './accompaniment-credit-item.component.html',
  styleUrls: [
    '../../accompaniment-credit-list.component.scss',
    './accompaniment-credit-item.component.scss',
  ],
})
export class AccompanimentCreditItemComponent {
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
